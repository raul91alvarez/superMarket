import { Injectable } from '@angular/core';
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {


  constructor() { }

  basicSwal(body:string) {
    Swal.fire('', body);
  }

  successSwal(title:string,body:string) {
    Swal.fire(title, body, 'success');
  }

  warningSwal(title:string,body:string) {
    Swal.fire(title, body, 'warning');
  }

  dangerSwal(title:string,body:string) {
    Swal.fire(title, body, 'error');
  }

  infoSwal(title:string,body:string) {
    Swal.fire(title, body, 'info');
  }

  delete(): Promise<any> {
    return Swal.fire({
        title: 'Alerta!!!',
        text: 'Estas seguro de realizar esta acción?',
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: 'rgb(17, 45, 168)',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Continuar',

    })
}

  confirmAlert(title:string,body:string) {
    Swal.fire({
      title: title,
      text: body,
      type: 'warning',
      showCloseButton: true,
      showCancelButton: true
    }).then((willDelete) => {
        if (willDelete.dismiss) {
          Swal.fire('', 'No se pudo eliminar', 'error');
        } else {
          Swal.fire('', 'Se elimino correctamente', 'success');
        }
      });
  }

  promptAlert() {
    Swal.fire({
      text: 'Write something here:',
      input: 'text',
    }).then((result) => {
      if (result.value) {
        Swal.fire('', `You typed: ${result.value}`);
      }
    });
  }

  ajaxAlert() {
    Swal.fire({
      text: 'Submit your Github username',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Look up',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        return fetch(`//api.github.com/users/${login}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response.json();
          })
          .catch(error => {
            Swal.showValidationMessage(
              `Request failed: ${error}`
            );
          });
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url
        });
      }
    });
  }
}
