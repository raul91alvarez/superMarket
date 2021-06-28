import { Subject, Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { IUserInterface } from 'src/app/addons/interfaces/user';
import { AuthenticationService } from 'src/app/addons/services/authentication/authentication.service';


export class FormInput {
  uid: string;
      displayName: string;
      email: string;
      password: string;
      disabled: boolean;
      date: Date;
}

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})



export class UsersListComponent implements OnInit, OnDestroy {

  //Subcriptions
  private $Subs: Subscription[]=[];

  // data table users
  public dataUsers: IUserInterface[]=[];
  public dtOptions: DataTables.Settings = {};
  public dtTrigger = new Subject();

  //form
  formInput: FormInput;
  form: any;
  public isSubmit: boolean;
  public confirmPassword: string ="";
  public checkedPassword: Boolean = false;


  constructor(private authServ: AuthenticationService, ) { 
    this.dtOptions={
      pagingType:'full_numbers',
      pageLength:5,
      ordering: false,
      language:{
        url:'//cdn.datatables.net/plug-ins/1.10.24/i18n/Spanish.json'
      }
    }
    this.isSubmit = false;
    this.formInput = {
      uid: this.authServ.generateid(10),
      displayName: '',
      email: '',
      password: '',
      disabled: false,
      date: new Date(Date.now()),
    };
  }
  
  ngOnInit() {
    this.getListUsers();
    
    
    
  }



  // submit form
  save(form: any) {
    console.log(this.formInput);
    if (!form.valid) {
      this.isSubmit = true;
    }else{
      this.authServ.addUsers(this.formInput);
      this.formInput
    }
  }

  //delete user
  deleteUser(id:string){
    console.log(id);
    this.authServ.deleteUsers(id);
  }



  //check confirm password
  checkPass(){
    if (this.confirmPassword != this.formInput.password ) {
      this.checkedPassword = false;
    }else if(this.confirmPassword == this.formInput.password){
      this.checkedPassword= true;
    }
  }
  

  //get list users
  getListUsers(){
    this.dataUsers=[];
    this.$Subs.push( this.authServ.getListUsers().get()
      .subscribe( actionArray => { 
        actionArray.forEach(element => {
          console.log(element.data());
          this.dataUsers.push(element.data());
          
        });
        this.dtTrigger.next();
      })
      );
  }
  
  
  ngOnDestroy(): void {
    this.$Subs.forEach(element => {
      element.unsubscribe();
    });
    this.dtTrigger.unsubscribe();
  }

}


