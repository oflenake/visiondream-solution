import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

// Icons - Brands
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  // Properties
  options: FormGroup;

  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', [Validators.required]);

  hasUnitNumber = false;

  // Icons - Brands
  vdFaFacebook = faFacebook;
  vdFaTwitter = faTwitter;
  vdFaGithub = faGithub;
  vdFaGoogle = faGoogle;

  states = [
    {name: 'Alabama', abbreviation: 'AL'},
    {name: 'Alaska', abbreviation: 'AK'},
    {name: 'American Samoa', abbreviation: 'AS'},
    {name: 'Arizona', abbreviation: 'AZ'},
    {name: 'Arkansas', abbreviation: 'AR'},
    {name: 'California', abbreviation: 'CA'},
    {name: 'Colorado', abbreviation: 'CO'},
    {name: 'Connecticut', abbreviation: 'CT'},
    {name: 'Delaware', abbreviation: 'DE'},
    {name: 'District Of Columbia', abbreviation: 'DC'},
    {name: 'Federated States Of Micronesia', abbreviation: 'FM'},
    {name: 'Florida', abbreviation: 'FL'},
    {name: 'Georgia', abbreviation: 'GA'},
    {name: 'Guam', abbreviation: 'GU'},
    {name: 'Hawaii', abbreviation: 'HI'},
    {name: 'Idaho', abbreviation: 'ID'},
    {name: 'Illinois', abbreviation: 'IL'},
    {name: 'Indiana', abbreviation: 'IN'},
    {name: 'Iowa', abbreviation: 'IA'},
    {name: 'Kansas', abbreviation: 'KS'},
    {name: 'Kentucky', abbreviation: 'KY'},
    {name: 'Louisiana', abbreviation: 'LA'},
    {name: 'Maine', abbreviation: 'ME'},
    {name: 'Marshall Islands', abbreviation: 'MH'},
    {name: 'Maryland', abbreviation: 'MD'},
    {name: 'Massachusetts', abbreviation: 'MA'},
    {name: 'Michigan', abbreviation: 'MI'},
    {name: 'Minnesota', abbreviation: 'MN'},
    {name: 'Mississippi', abbreviation: 'MS'},
    {name: 'Missouri', abbreviation: 'MO'},
    {name: 'Montana', abbreviation: 'MT'},
    {name: 'Nebraska', abbreviation: 'NE'},
    {name: 'Nevada', abbreviation: 'NV'},
    {name: 'New Hampshire', abbreviation: 'NH'},
    {name: 'New Jersey', abbreviation: 'NJ'},
    {name: 'New Mexico', abbreviation: 'NM'},
    {name: 'New York', abbreviation: 'NY'},
    {name: 'North Carolina', abbreviation: 'NC'},
    {name: 'North Dakota', abbreviation: 'ND'},
    {name: 'Northern Mariana Islands', abbreviation: 'MP'},
    {name: 'Ohio', abbreviation: 'OH'},
    {name: 'Oklahoma', abbreviation: 'OK'},
    {name: 'Oregon', abbreviation: 'OR'},
    {name: 'Palau', abbreviation: 'PW'},
    {name: 'Pennsylvania', abbreviation: 'PA'},
    {name: 'Puerto Rico', abbreviation: 'PR'},
    {name: 'Rhode Island', abbreviation: 'RI'},
    {name: 'South Carolina', abbreviation: 'SC'},
    {name: 'South Dakota', abbreviation: 'SD'},
    {name: 'Tennessee', abbreviation: 'TN'},
    {name: 'Texas', abbreviation: 'TX'},
    {name: 'Utah', abbreviation: 'UT'},
    {name: 'Vermont', abbreviation: 'VT'},
    {name: 'Virgin Islands', abbreviation: 'VI'},
    {name: 'Virginia', abbreviation: 'VA'},
    {name: 'Washington', abbreviation: 'WA'},
    {name: 'West Virginia', abbreviation: 'WV'},
    {name: 'Wisconsin', abbreviation: 'WI'},
    {name: 'Wyoming', abbreviation: 'WY'}
  ];

  // Constructor
  constructor(fb: FormBuilder) {
    this.options = fb.group({
      rememberMeCheck: false,
      floatLabel: 'auto',
    });
  }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.emailControl.hasError('required') ? 'You must enter a value' :
      this.emailControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  onSubmit() {
    alert('Thanks!');
  }

}
