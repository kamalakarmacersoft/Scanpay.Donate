import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { DonationService } from '../_services';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment.prod';


@Component({
    templateUrl: './donation.component.html',
    styleUrls: ['./donation.component.scss']
})
export class DonationComponent implements OnInit {

    locationId: string = "";
    fundId: string = "";
    accountId: string = "";
    donationData: any;
    submitted: boolean = false;
    isLoading: boolean = true;
    organizationDetail: any = {
        "organization": "",
        "relief_fund": "",
        "base64_log": "",
        "frequency_options": [],
        "payment_sources": []
    }

    //http://scanpay.dev.website.s3-website-us-east-1.amazonaws.com/donation/?
    //accountID=3bf313c1-6b24-45ff-b30f-1ad2dbe2a226&locationID=bb6a8716-3f1b-489c-a018-c69ab3049c6f&reliefFundID=

    constructor(private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private donationService: DonationService,
        private _sanitizer: DomSanitizer,
        private router: Router) {
        this.route.queryParams.subscribe(params => {
            this.accountId = params['accountID'];
            this.locationId = params['locationID'] || "";
            this.fundId = params['reliefFundID'] || "";
            this.donationData = {
                account_id: this.accountId,
                frequency: "",
                location_id: this.locationId,
                relieffund_id: this.fundId,
                payment_source: {
                    source_id: null
                },
                amount: null,
                start_date: new Date(),
                end_date: new Date()
            };

            this.getOrganizationDetail(this.accountId, this.locationId, this.fundId);
        });
    }

    ngOnInit() {
    }

    getOrganizationDetail(accountId: string, locationId: string, reliefFundId: string) {
        this.isLoading = true;
        
        if (reliefFundId) {
            this.donationService.getOrganizationDetailByFundId(accountId, reliefFundId).subscribe(x => {
                this.organizationDetail = x;
                this.organizationDetail.base64_log = this.organizationDetail.base64_log.trim();
                this.organizationDetail.organization = this.organizationDetail.organization.trim();
                this.organizationDetail.relief_fund = this.organizationDetail.relief_fund.trim();
                this.donationData.frequency = this.organizationDetail.frequency_options[0];
                this.donationData.payment_source.source_id = this.organizationDetail.payment_sources[0].source_id;

                this.organizationDetail.image = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
                    + this.organizationDetail.base64_log);

                this.isLoading = false;
            }, err => {
                console.log(err);
                this.isLoading = false;
            });
        } else {
            this.donationService.getOrganizationDetailByLocationId(accountId, locationId).subscribe(x => {
                this.organizationDetail = x;
                this.organizationDetail.base64_log = this.organizationDetail.base64_log.trim();
                this.organizationDetail.organization = this.organizationDetail.organization.trim();
                this.organizationDetail.relief_fund = this.organizationDetail.relief_fund.trim();
                this.donationData.frequency = this.organizationDetail.frequency_options[0];
                this.donationData.payment_source.source_id = this.organizationDetail.payment_sources[0].source_id;

                this.organizationDetail.image = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
                    + this.organizationDetail.base64_log);

                this.isLoading = false;
            }, err => {
                console.log(err);
                this.isLoading = false;
            });
        }
    }

    makeDonation(f: NgForm) {
        if (f.valid) {
            this.isLoading = true;

            this.donationData.payment_source = this.organizationDetail.payment_sources.filter(x => x.source_id === this.donationData.payment_source.source_id)[0];

            this.donationService.donate(this.donationData).subscribe(x => {
                console.log(x);
                this.isLoading = false;
                if (x.status === 0) {
                    window.location.href = environment.donationSuccess + '&locationid=' + this.locationId + '&fundid=' + this.fundId;
                } else {
                    window.location.href = environment.donationFailure + '&locationid=' + this.locationId + '&fundid=' + this.fundId;
                }
            }, err => {
                console.log(err);
                this.isLoading = false;
                window.location.href = environment.donationFailure + '&locationid=' + this.locationId + '&fundid=' + this.fundId;
            });
        } else {
            this.submitted = true;
        }
    }

    changeMyMind() {
        window.location.href = environment.donationChangeMyMind + '&locationid=' + this.locationId + '&fundid=' + this.fundId;
    }

}
