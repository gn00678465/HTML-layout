const user_array = [
  {
    name: 'Emir Wicks',
    mail: 'emir.wicks@mail.com',
    verified: true,
  },
  {
    name: 'Zaina Goldsmith',
    mail: 'zaina.goldsmith@mail.com',
    verified: true,
  },
  {
    name: 'Mahima Lopez',
    mail: 'Mahima.Lopez@mail.com',
    verified: true,
  },
  {
    name: 'Pharrell Murray',
    mail: 'Pharrell.Murray@mail.com',
    verified: true,
  },
  {
    name: 'Annika Mcbride',
    mail: 'Annika.Mcbride@mail.com',
    verified: true,
  },
  {
    name: 'Fatimah Clark',
    mail: 'Fatimah.Clark@mail.com',
    verified: true,
  },
  {
    name: 'Klaudia Rhodes',
    mail: 'Klaudia.Rhodes@mail.com',
    verified: true,
  },
  {
    name: 'Tillie Lucero',
    mail: 'Tillie.Lucero@mail.com',
    verified: true,
  },
  {
    name: 'Sabrina Stephenson',
    mail: 'Sabrina.Stephenson@mail.com',
    verified: true,
  },
  {
    name: 'Annie Smith',
    mail: 'Annie.Smith@mail.com',
    verified: true,
  }
];

$(document).ready(() => {
  const tbody = document.querySelector('.tbody');
  const currentPath = window.location.pathname.split('.')[0].replace(/[^a-zA-Z]/g, '');

  // admin page
  const table = document.querySelector('.table');
  function userTable() {
    if (currentPath == 'admin') {
      let user_html = user_array.map((user, index) => {
        return `
        <tr class="tr">
          <td class="td">#${index + 1}</td>
          <td class="td">${user.name}</td>
          <td class="td">${user.mail}</td>
          <td class="td">${user.verified ? 'Yes' : 'No'}</td>
          <td class="td">
            <button type="button" class="material-icons btn-icon hover-primary mr-6" data-target="userPhotoModal" data-action="view" data-name="${user.name}">remove_red_eye</button>
            <button type="button" class="material-icons btn-icon hover-primary edit-admin" data-target="userDataModal" data-action="edit" data-name="${user.name}">edit</button>
          </td>
        </tr>
        `
      }).join('');
      tbody.innerHTML = user_html;
      addAdminBtn.addEventListener('click', modalHandler);
      table.addEventListener('click', tableHandler);
    }
  }

  // modal
  const addAdminBtn = document.querySelector('.add-admin');
  let modalShow = false;
  let modalStatus = '';
  let currentModal = null;
  let userTemp = {};
  const modals = [...document.querySelectorAll('.modal')];
  modals.forEach((modal) => {
    modal.classList.add('d-none');
  })
  function modalShowHandler() {
    currentModal.classList.remove('d-none');
    currentModal.classList.add('d-block');
    setTimeout(() => {
      currentModal.classList.add('show');
    }, 200)
    const deactivate = currentModal.querySelector('#deactivate');
    const addBtn = currentModal.querySelector('.add-btn');
    const updateBtn = currentModal.querySelector('.update-btn');
    if (modalShow && modalStatus === 'edit'){
      const name = currentModal.querySelector('#name');
      const mail = currentModal.querySelector('#mail');
      const verification = currentModal.querySelector('#verification');
      deactivate.classList.remove('d-none');
      deactivate.classList.add('d-block');
      addBtn.style.display = 'none';
      updateBtn.style.display = 'inline-block';
      name.value = userTemp.name;
      mail.value = userTemp.mail;
      if(userTemp.verified) {
        verification.querySelector('.label').innerText = "Verified";
        verification.querySelector('#verified').checked = userTemp.verified;
        verification.querySelector('#verified').readOnly = true;
        verification.querySelector('[type="button"]').disabled = true;
      }
    } else if (modalShow && modalStatus === 'add') {
      deactivate.classList.add('d-none');
      deactivate.classList.remove('d-block');
      updateBtn.style.display = 'none';
      addBtn.style.display = 'inline-block';
    }
  }

  function modalHandler(e) {
    const { target, action } = e.target.dataset;
    currentModal = document.querySelector(`#${target}`);
    modalShow = true;
    modalStatus = action;
    modalShowHandler();
    currentModal.addEventListener('click', function(e) {
      if (e.currentTarget === e.target || e.target.dataset.dismiss === 'modal') {
        moadalClose();
      }
    });
    if (action === 'view') {
      const userDetial = currentModal.querySelector('#userDetial');
      const showBtn = userDetial.querySelector('.showBtn');
      if (userDetial.classList.contains('open')) {
        userDetial.classList.remove('open');
        showBtn.addEventListener('click',function() {
          userDetial.classList.toggle('open');
        })
      }
      showBtn.addEventListener('click',function() {
        userDetial.classList.toggle('open');
      })
    }
  }

  function moadalClose() {
    if (modalShow && modalStatus === 'edit') {
      userTemp = {};
      const name = currentModal.querySelector('#name');
      const mail = currentModal.querySelector('#mail');
      const verification = currentModal.querySelector('#verification');
      name.value = '';
      mail.value = '';
      verification.querySelector('#verified').checked = false;
      verification.querySelector('[type="button"]').disabled = false;
    }
    currentModal.classList.remove('show');
    setTimeout(() => {
      currentModal.classList.remove('d-block');
      currentModal.classList.add('d-none');
      modalShow = false;
      modalStatus = '';
      // currentModal = null;
    }, 200)
  }

  function tableHandler(e) {
    const { name } = e.target.dataset;
    const index = user_array.findIndex((user) => user.name === name);
    userTemp = {...user_array[index]};
    modalHandler(e);
  }

  userTable();
});