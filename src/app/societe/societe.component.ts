import { Component, OnInit } from '@angular/core';
import { CustomValidators } from 'ngx-custom-validators';
import { FormGroup, FormBuilder, FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DataLayerService } from '../shared/services/data-layer.service';
import { ISociete } from '../shared/interfaces';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-societe',
  templateUrl: './societe.component.html',
  styleUrls: ['./societe.component.scss']
})
export class SocieteComponent implements OnInit {
  formSociete: FormGroup;
  loading: boolean;
  radioGroup: FormGroup;
   // appliquer 
  societe: ISociete = {
    nom: '',
    tenantId: 'BranchA',
    matriculeFiscal: '',
    tva: '',
    adresse: '',
    c: '',
    a: '',
    cin: '',
    activite: '',
    codePostal: '',
    numeroEmployeurCNSS: ''
  };
  errorMessage = '';
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private dataService: DataLayerService,
    private router: Router, 
  private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.buildFormBasic();
    this.radioGroup = this.fb.group({
      radio: []
    });
  }
 // appliquer 
  buildFormBasic() {
    this.formSociete = this.fb.group({
      nom:  [this.societe.nom, Validators.required],
      matriculeFiscal:   [this.societe.matriculeFiscal, Validators.required],
      tva:     [this.societe.tva, Validators.required],
      activite:      [this.societe.activite, Validators.required],
      adresse:    [this.societe.adresse, Validators.required],
      codePostal:       [this.societe.codePostal, Validators.required],
      numeroEmployeurCNSS:    [this.societe.numeroEmployeurCNSS, Validators.required],
      cin : [this.societe.cin, Validators.required],
      c : [this.societe.c, Validators.required],
      a : [this.societe.c, Validators.required],
      tenantId :[this.societe.tenantId, Validators.required],
    });
  }

  submit() {

    this.dataService.saveSociete(this.formSociete.value)
  .subscribe((societe: ISociete) => {
    if (societe) {
      this.router.navigate(['/societes']);
    } else {
      this.errorMessage = 'Unable to add societe';
    }
  },
  (err: any) => console.log(err));
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.toastr.success('Profile updated.', 'Success!', {progressBar: true});
    }, 3000);
  }
}
