/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";

export default function SideBar() {
  return (
    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark text-white">
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <a
          href="/home"
          className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <img
            src="../../Logo_cardcycle_oficial_13pt.svg"
            alt="a"
            width="40"
            height="40"
            className="rounded-0"
          />
          <span className="fs-5 d-none d-sm-inline fw-bold">CardCycle</span>
        </a>

        <hr />
        <ul
          className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
          id="menu"
        >
          <li className="nav-item">
            <a href="/home" className="nav-link align-middle px-0 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-house"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                />
                <path
                  fill-rule="evenodd"
                  d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                />
              </svg>
              <span className="ms-1 d-none d-sm-inline align-middle hover-sidebar">
                Página inicial
              </span>
            </a>
          </li>
          <li>
            <a
              href="/"
              data-bs-toggle="collapse"
              className="nav-link px-0 align-middle text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-list-task"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"
                />
                <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
                <path
                  fill-rule="evenodd"
                  d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"
                />
              </svg>
              <span className="ms-1 d-none d-sm-inline align-middle hover-sidebar">
                Minhas tarefas
              </span>
            </a>
          </li>
          <li>
            <a
              href="/caixa-entrada"
              className="nav-link px-0 align-middle text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-bell"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
              </svg>
              <span className="ms-1 d-none d-sm-inline align-middle hover-sidebar">
                Caixa de entrada
              </span>
            </a>
          </li>
        </ul>
        <hr />
        <div className="dropdown pb-4">
          <a
            href="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://avatars.githubusercontent.com/u/46498780?s=400&u=fdacca3cb8b18f1a8e308a07b64e18d06eb8ed59&v=4"
              alt="hugenerd"
              width="30"
              height="30"
              className="rounded-circle"
            />
            <span className="d-none d-sm-inline mx-1">Fulano (hardcode)</span>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li>
              <a className="dropdown-item" href="#">
                Novo projeto
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Configurações
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Meu perfil
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sair
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
