import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeServise } from '../../../servises/Employee.servise';
import { Employee } from '../../../model/Employee.model';

@Component({
  selector: 'app-sign-up',
  // standalone: true,
  // imports: [],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent implements OnInit {
  // constructor(private router: Router) {}

  // public addForm!: FormGroup;

  // // // הפונקציה שקוראת מיד בהעלת הקומפוננטה לאויר
  // // ngOnInit(): void {
  // //   // הגדרת השדות של הטופס כל קונטרול מקביל לאינפוט שיש בhtml
  // //   this.addForm = new FormGroup({
  // //     "firstName": new FormControl("", [Validators.required, Validators.minLength(3)]),
  // //     "lastName": new FormControl(),
  // //     "grade": new FormControl()
  // //   })
  // // }
  constructor(private router:Router, private _employeeService:EmployeeServise) {}
  
  public addForm!: FormGroup
  public employee!:Employee

  // // הפונקציה שקוראת מיד בהעלת הקומפוננטה לאויר
  ngOnInit(): void {
    // הגדרת השדות של הטופס כל קונטרול מקביל לאינפוט שיש בhtml
    this.addForm = new FormGroup({
      "FirstName": new FormControl("",[Validators.required, Validators.minLength(3)]),
      "LastName": new FormControl("",[Validators.required, Validators.minLength(3)]),
      "Email": new FormControl("",[Validators.required, Validators.email]),
      "Experience":new FormControl("",[Validators.required]),
      "Status":new FormControl("",[Validators.required, Validators.min(0),Validators.max(1)]),
      "Password":new FormControl("",[Validators.required, Validators.minLength(3)]),
    })
  }

  save_save(){
    this.employee=this.addForm.value
    console.log(this.addForm.value.firstName);
    
    console.log("save_save:  ",this.employee)
    // this.route.params.subscribe((parm)=>{
      this._employeeService.addNewEmployee(this.employee).subscribe({
        next:(res)=>{
          this.employee=res
          //ניווט לעמוד
          console.log(this.employee)
        },
        error:(err)=>{
          console.log(err)
        }
      })
    // }
    // )
  }

  goToSignIn() {
    console.log("in goToSignIn function")
    this.router.navigate(['/logIn/signIn']);
  }
}
