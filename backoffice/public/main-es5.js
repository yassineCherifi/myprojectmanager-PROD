(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n  <router-outlet></router-outlet>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html": 
        /*!*****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html ***!
          \*****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div id=\"viewport\">\n  <!-- Sidebar -->\n  <div *ngIf=\"userInfos\" id=\"sidebar\">\n    <header>\n        <p style=\"text-align: center\"><span class=\"badge badge-secondary\"> Bienvenue {{ userInfos.name}}</span></p>\n\n      </header>\n\n    <ul class=\"nav\">\n      <li>\n        <a routerLink=\"projects\">\n          <i class=\"zmdi zmdi-view-dashboard\"></i> Mes projets\n        </a>\n      </li>\n      <li>\n        <a routerLink=\"projects\" >\n          <i class=\"zmdi zmdi-view-dashboard\"></i> Mes collaborateurs\n        </a>\n      </li>\n      <li>\n        <a routerLink=\"projects\" >\n          <i class=\"zmdi zmdi-view-dashboard\"></i> Paramètres\n        </a>\n      </li>\n      <li>\n        <a href=\"javascript:void(0)\" (click)=\"logout()\">\n          <i class=\"zmdi zmdi-view-dashboard\"></i> Déconnexion\n        </a>\n      </li>\n    </ul>\n  </div>\n  <!-- Content -->\n  <div id=\"content\">\n    <div class=\"container-fluid\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/detailprojet/detailprojet.component.html": 
        /*!*********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/detailprojet/detailprojet.component.html ***!
          \*********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card w-100\">\n    <div class=\"card-body\">\n        <h4 class=\"card-title\">{{ project?.title }}</h4>\n        <p class=\"card-text\" style=\"color: gray;\">{{ project?.description }}</p>\n        <a *ngIf=\"isCreator\" class=\"btn btn-primary\" data-toggle=\"collapse\" href=\"#editproject\" role=\"button\"\n            aria-expanded=\"false\" aria-controls=\"editproject\">Editer <i class=\"fa fa-pencil\"></i></a>\n    </div>\n\n    <div class=\"collapse multi-collapse\" id=\"editproject\">\n        <div class=\"card card-body\">\n            <div class=\"col-md-5\">\n                <fieldset>\n                    <form #editproject=\"ngForm\" (ngSubmit)=\"editProject(editproject)\">\n                        <div class=\"form-group\">\n                            <input style=\"width: 100%;\" required type=\"email\" [(ngModel)]=\"modelproject.title\"\n                                class=\"form-control\" name=\"title\" id=\"title\" ng-init=\"myText='Hello World!'\">\n                        </div>\n                        <div class=\"form-group\">\n                            <textarea class=\"form-control\" required style=\"width: 100%;resize: none;\"\n                                [(ngModel)]=\"modelproject.description\" id=\"description\" name=\"description\"\n                                rows=\"4\">{{project?.description}}</textarea>\n                        </div>\n                        <a class=\"btn btn-success\" data-toggle=\"collapse\" href=\"#editproject\" role=\"button\"\n                            (click)=\"editProject(editproject)\" aria-expanded=\"false\"\n                            aria-controls=\"editproject\">Confirmer</a>\n                    </form>\n                </fieldset>\n            </div>\n        </div>\n    </div>\n</div><br>\n<ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n    <li class=\"nav-item\">\n        <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\"\n            aria-selected=\"true\">Issues</a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" id=\"taches-tab\" data-toggle=\"tab\" href=\"#taches\" role=\"tab\" aria-controls=\"taches\"\n            aria-selected=\"false\">Tâches</a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#tests\" role=\"tab\" aria-controls=\"profile\"\n            aria-selected=\"false\">Tests</a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" id=\"sprints-tab\" data-toggle=\"tab\" href=\"#sprints\" role=\"tab\" aria-controls=\"sprints\"\n            aria-selected=\"false\">Sprints</a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" id=\"releases-tab\" data-toggle=\"tab\" href=\"#releases\" role=\"tab\" aria-controls=\"releases\"\n            aria-selected=\"false\">Releases</a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" id=\"documentations-tab\" data-toggle=\"tab\" href=\"#documentations\" role=\"tab\"\n            aria-controls=\"documentations\" aria-selected=\"false\">Documentations</a>\n    </li>\n</ul>\n\n<div class=\"tab-content\">\n    <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">Liste des issues</h5>\n            <a class=\"btn btn-success\" data-toggle=\"collapse\" href=\"#addIssue\" role=\"button\" aria-expanded=\"false\"\n                aria-controls=\"addIssue\">Ajouter <i class=\"fa fa-plus\"></i></a>\n        </div>\n\n        <div class=\"collapse multi-collapse\" id=\"addIssue\">\n            <div class=\"card card-body\">\n                <div class=\"col-md-6\">\n                    <fieldset>\n                        <form #newIssue=\"ngForm\" (ngSubmit)=\"newIssue.valid\">\n                            <div class=\"from row\">\n                                <div class=\"form-group col-md-12\">\n                                    <textarea class=\"form-control\" placeholder=\"Décrire votre issue\"\n                                        style=\"width: 100%;resize: none;\" id=\"description\" name=\"description\"\n                                        [(ngModel)]=\"modelIssue.description\" rows=\"4\"></textarea>\n                                </div>\n                            </div>\n                            <div class=\"from row\">\n                                <div class=\"form-group col\">\n                                    <input type=\"email\" class=\"form-control\" placeholder=\"ID\" name=\"issueID\"\n                                        id=\"issueID\" rows=\"3\" [(ngModel)]=\"modelIssue.issueID\">\n                                </div>\n                                <div class=\"form-group col\">\n                                    <input type=\"email\" class=\"form-control\" placeholder=\"Priorité\" name=\"priorite\"\n                                        id=\"priorite\" rows=\"3\" [(ngModel)]=\"modelIssue.priorite\">\n                                </div>\n                                <div class=\"form-group col\">\n                                    <select class=\"custom-select\" id=\"difficulte\" name=\"difficulte\"\n                                        [(ngModel)]=\"modelIssue.difficulte\">\n                                        <option disabled value='0'>Difficulté</option>\n                                        <option>Basse</option>\n                                        <option>Moyenne</option>\n                                        <option>Elevée</option>\n                                    </select>\n                                </div>\n                                <div class=\"form-group col\">\n                                    <select (change)=\"ChangingValue($event)\" class=\"custom-select\" id=\"status\"\n                                        name=\"status\" [(ngModel)]=\"modelIssue.status\" [value]='0'>\n                                        <option disabled value='0'>Status</option>\n                                        <option>En cours</option>\n                                        <option>Terminé</option>\n                                    </select>\n\n                                </div>\n                            </div>\n                            <a class=\"btn btn-success\" (click)=\"onSubmitIssue(newIssue)\" data-toggle=\"collapse\"\n                                href=\"#addIssue\" role=\"button\" aria-expanded=\"false\"\n                                aria-controls=\"addIssue\">Ajouter</a>\n                        </form>\n                    </fieldset>\n                </div>\n            </div>\n        </div>\n\n        <table class=\"table table-striped\">\n            <thead class=\"thead\">\n                <tr>\n                    <th scope=\"col\">ID</th>\n                    <th scope=\"col\">Description</th>\n                    <th scope=\"col\">Priorité </th>\n                    <th scope=\"col\">Difficulté </th>\n                    <th scope=\"col\">Status </th>\n                    <th></th>\n                </tr>\n            </thead>\n\n            <tbody>\n                <tr *ngFor=\"let issue of project?.issues\">\n                    <td>{{issue?.issueID}}</td>\n                    <td style=\"width: 40%;\">{{issue?.description}}</td>\n                    <td>{{issue?.priorite}}</td>\n                    <td>{{issue?.difficulte}}</td>\n                    <td>{{issue?.status}}</td>\n\n                    <td>\n                        <button type=\"button\" (click)=\"updateModalEditIssue(issue)\" data-toggle=\"modal\"\n                            data-target=\"#editIssueModal\" class=\"btn btn-info\"><i class=\"fa fa-edit\"></i></button>&nbsp;\n                        <button type=\"button\" (click)=\"removeIssue(issue._id)\" class=\"btn btn-danger\"><i\n                                class=\"fa fa-trash-o\"></i></button>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <div class=\"modal fade\" id=\"editIssueModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n        aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-lg\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"exampleModalLabel\">Editer issue</h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <form #editIssue=\"ngForm\" (ngSubmit)=\"editIssue.valid\">\n                        <div class=\"from row\">\n                            <div class=\"form-group col-md-12\">\n                                <textarea class=\"form-control\" placeholder=\"Décrire votre issue\"\n                                    style=\"width: 100%;resize: none;\" id=\"description\" name=\"description\"\n                                    [(ngModel)]=\"modelIssueEdit.description\" rows=\"4\"></textarea>\n                            </div>\n                        </div>\n                        <div class=\"from row\">\n                            <div class=\"form-group col\">\n                                <input type=\"email\" class=\"form-control\" placeholder=\"ID\" name=\"issueID\" id=\"issueID\"\n                                    rows=\"3\" [(ngModel)]=\"modelIssueEdit.issueID\">\n                            </div>\n                            <div class=\"form-group col\">\n                                <input type=\"email\" class=\"form-control\" placeholder=\"Priorité\" name=\"priorite\"\n                                    id=\"priorite\" rows=\"3\" [(ngModel)]=\"modelIssueEdit.priorite\">\n                            </div>\n                            <div class=\"form-group col\">\n                                <select class=\"custom-select\" id=\"difficulte\" name=\"difficulte\"\n                                    [(ngModel)]=\"modelIssueEdit.difficulte\">\n                                    <option disabled value='0'>Difficulté</option>\n                                    <option>Basse</option>\n                                    <option>Moyenne</option>\n                                    <option>Elevée</option>\n                                </select>\n                            </div>\n                            <div class=\"form-group col\">\n                                <select (change)=\"ChangingValue($event)\" class=\"custom-select\" id=\"status\" name=\"status\"\n                                    [(ngModel)]=\"modelIssueEdit.status\" [value]='0'>\n                                    <option disabled value='0'>Status</option>\n                                    <option>En cours</option>\n                                    <option>Terminé</option>\n                                </select>\n\n                            </div>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Annuler</button>\n                    <button type=\"button\" (click)=\"onSubmitEditIssue(editIssue)\" data-dismiss=\"modal\"\n                        class=\"btn btn-primary\">Confirmer</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div id=\"taches\" class=\"tab-pane fade\">\n\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">Liste des tâches</h5>\n            <a class=\"btn btn-success\" data-toggle=\"collapse\" href=\"#multiCollapseExample2\" role=\"button\"\n                aria-expanded=\"false\" aria-controls=\"multiCollapseExample2\">Ajouter <i class=\"fa fa-plus\"></i></a>\n        </div>\n        <div class=\"collapse multi-collapse\" id=\"multiCollapseExample2\">\n            <div class=\"card card-body\">\n                <div class=\"col-md-5\">\n                    <fieldset>\n                        <form #newTask=\"ngForm\" (ngSubmit)=\"newTask.valid\">\n                            <div class=\"from row\">\n                                <div class=\"form-group col\">\n                                    <select class=\"custom-select\" id=\"idIssues\" name=\"idIssues\"\n                                        [(ngModel)]=\"modelTask.issue\">\n                                        <option disabled value='0'>Choisir l'issue</option>\n                                        <option [value]='issue?.issueID' *ngFor=\"let issue of project?.issues\">\n                                            {{issue?.issueID}} / {{issue?.description}}\n                                        </option>\n                                    </select>\n                                </div>\n                            </div>\n                            <div class=\"from row\">\n                                <div class=\"form-group col-md-12\">\n                                    <textarea class=\"form-control\" placeholder=\"Décrire votre tâche\"\n                                        style=\"width: 100%;resize: none;\" id=\"description\" name=\"description\"\n                                        [(ngModel)]=\"modelTask.description\" rows=\"4\"></textarea>\n                                </div>\n                            </div>\n                            <div class=\"from row\">\n                                <div class=\"form-group col\">\n                                    <input type=\"email\" class=\"form-control\" placeholder=\"Côut\" name=\"cout\" id=\"cout\"\n                                        rows=\"3\" [(ngModel)]=\"modelTask.cout\">\n                                </div>\n                                <div class=\"form-group col\">\n                                    <select class=\"custom-select\" id=\"developer\" name=\"developer\"\n                                        [(ngModel)]=\"modelTask.developer\">\n                                        <option disabled value='0'>Choisir le développeur</option>\n                                        <option *ngFor=\"let user of users\">\n                                            {{user?.name}} / {{user?.email}}\n                                        </option>\n                                    </select>\n                                </div>\n                            </div>\n                            <a class=\"btn btn-success\" (click)=\"onSubmitTask(newTask)\" data-toggle=\"collapse\"\n                                href=\"#multiCollapseExample2\" role=\"button\" aria-expanded=\"false\"\n                                aria-controls=\"multiCollapseExample2\">Confirmer</a>\n                        </form>\n                    </fieldset>\n                </div>\n            </div>\n        </div>\n\n        <table class=\"table table-striped\">\n            <thead class=\"thead\">\n                <tr>\n                    <th scope=\"col\">Issues</th>\n                    <th scope=\"col\">Description</th>\n                    <th scope=\"col\">Coût</th>\n                    <th scope=\"col\">Développeur</th>\n                    <th></th>\n                </tr>\n            </thead>\n\n            <tbody>\n                <tr *ngFor=\"let task of project?.tasks\">\n                    <td>\n                        <p *ngFor=\"let issue of task?.idIssues\">[ {{issue}} ]</p>\n                    </td>\n                    <td style=\"width: 40%;\">{{task?.description}}</td>\n                    <td>{{task?.cout}}</td>\n                    <td>{{task?.developer}}</td>\n\n                    <td>\n                            <button type=\"button\" (click)=\"updateModalEditTask(task)\" data-toggle=\"modal\"\n                            data-target=\"#editTaskModal\" class=\"btn btn-info\"><i class=\"fa fa-edit\"></i></button>&nbsp;\n                        <button type=\"button\" (click)=\"removeTask(task._id)\" class=\"btn btn-danger\"><i\n                                class=\"fa fa-trash-o\"></i></button>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n\n    <div class=\"modal fade\" id=\"editTaskModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n        aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-lg\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"exampleModalLabel\">Editer tâche</h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <form #editTask=\"ngForm\" (ngSubmit)=\"editTask.valid\">\n                        <div class=\"from row\">\n                            <div class=\"form-group col\">\n                                <select class=\"custom-select\" id=\"idIssues\" name=\"idIssues\"\n                                    [(ngModel)]=\"modelTaskEdit.issue\">\n                                    <option disabled value='0'>Choisir l'issue</option>\n                                    <option [value]='issue?.issueID' *ngFor=\"let issue of project?.issues\">\n                                        {{issue?.issueID}} / {{issue?.description}}\n                                    </option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"from row\">\n                            <div class=\"form-group col-md-12\">\n                                <textarea class=\"form-control\" placeholder=\"Décrire votre tâche\"\n                                    style=\"width: 100%;resize: none;\" id=\"description\" name=\"description\"\n                                    [(ngModel)]=\"modelTaskEdit.description\" rows=\"4\"></textarea>\n                            </div>\n                        </div>\n                        <div class=\"from row\">\n                            <div class=\"form-group col\">\n                                <input type=\"email\" class=\"form-control\" placeholder=\"Côut\" name=\"cout\" id=\"cout\"\n                                    rows=\"3\" [(ngModel)]=\"modelTaskEdit.cout\">\n                            </div>\n                            <div class=\"form-group col\">\n                                <select class=\"custom-select\" id=\"developer\" name=\"developer\"\n                                    [(ngModel)]=\"modelTaskEdit.developer\">\n                                    <option disabled value='0'>Choisir le développeur</option>\n                                    <option *ngFor=\"let user of users\">\n                                        {{user?.name}} / {{user?.email}}\n                                    </option>\n                                </select>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Annuler</button>\n                    <button type=\"button\" (click)=\"onSubmitEditTask(editTask)\" data-dismiss=\"modal\"\n                        class=\"btn btn-primary\">Confirmer</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div id=\"tests\" class=\"tab-pane fade\">\n        <h3>Liste des tests</h3>\n        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,\n            totam rem\n            aperiam.</p>\n    </div>\n    <div id=\"sprints\" class=\"tab-pane fade\">\n        <h3>Liste des sprints</h3>\n        <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt\n            explicabo.</p>\n    </div>\n    <div id=\"releases\" class=\"tab-pane fade\">\n        <h3>Liste des releases</h3>\n        <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt\n            explicabo.</p>\n    </div>\n    <div id=\"documentations\" class=\"tab-pane fade\">\n        <h3>Liste des documentations</h3>\n        <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt\n            explicabo.</p>\n    </div>\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/listprojets/listprojets.component.html": 
        /*!*******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/listprojets/listprojets.component.html ***!
          \*******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n    <div class=\"card-body\">\n        <h3 class=\"card-title\">Mes projets</h3>\n        <a class=\"btn btn-success\" data-toggle=\"collapse\" href=\"#addproject\" role=\"button\"\n            aria-expanded=\"false\" aria-controls=\"addproject\">Nouveau projet  <i class=\"fa fa-plus\"></i></a>\n    </div>\n    <div class=\"collapse multi-collapse\" id=\"addproject\">\n        <div class=\"card card-body\">\n            <div class=\"col-md-5\">\n                <fieldset>\n                    <form #newProject=\"ngForm\" (ngSubmit)=\"newProject.valid\">\n                        <div class=\"form-group\">\n                            <label for=\"title\">Titre</label>\n                            <input type=\"email\" class=\"form-control\" name=\"title\" id=\"title\" [(ngModel)]=\"model.title\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"description\">Description</label>\n                            <textarea class=\"form-control\" id=\"description\" name=\"description\" rows=\"3\" [(ngModel)]=\"model.description\"></textarea>\n                        </div>\n                        <a class=\"btn btn-success\" data-toggle=\"collapse\" href=\"#addproject\" role=\"button\"\n                            (click)=\"onSubmit(newProject)\" aria-expanded=\"false\"\n                            aria-controls=\"editproject\">Confirmer</a>\n                    </form>\n                </fieldset>\n            </div>\n        </div>\n    </div>\n</div>\n<table class=\"table\">\n    <thead>\n        <tr>\n            <th scope=\"col\">Titre</th>\n            <th scope=\"col\">Description</th>\n            <th scope=\"col\">Manager</th>\n            <th scope=\"col\">Status</th>\n            <th scope=\"col\"></th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let project of projects.result\">\n            <td><a routerLink={{project?._id}}>{{project?.title}}</a></td>\n            <td>{{project?.description}}</td>\n            <td>{{project?.creator?.name}}</td>\n            <td>{{project?.status}}</td>\n            <td *ngIf=\"project?.creator?._id === projects?.idlogged\">\n                <button type=\"button\" (click)=\"removeProject(project._id)\" class=\"btn btn-danger\"><i class=\"fa fa-trash\"></i></button>\n            </td>\n        </tr>\n    </tbody>\n</table>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/login/login.component.html": 
        /*!**************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/login/login.component.html ***!
          \**************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<form #loginForm=\"ngForm\" (ngSubmit)=\"loginForm.valid && onSubmit(loginForm)\">\n    <input type=\"text\" #email=\"ngModel\" [(ngModel)]=\"model.email\" [pattern]=\"emailRegex\"\n        [ngClass]=\"{'invalid-textbox' :loginForm.submitted && !email.valid}\" name=\"email\"\n        placeholder=\"Entrez votre email\" required>\n    <div *ngIf=\"loginForm.submitted && email.errors?.pattern\">\n        <label class=\"validation-message\">L'adresse mail n'est pas valide</label>\n    </div>\n    <input type=\"password\" minlength=\"8\" #password=\"ngModel\"\n        [ngClass]=\"{'invalid-textbox' :loginForm.submitted && !password.valid}\" [(ngModel)]=\"model.password\"\n        name=\"password\" placeholder=\"Entrez votre mot de passe\" required>\n    <div *ngIf=\"loginForm.submitted && password.errors?.minlength\">\n        <label class=\"validation-message\">Le mot de passe doit contenir au moins 8 caractères</label>\n    </div>\n    <input type=\"submit\" value=\"Se connecter\">\n</form>\n\n<div class=\"alert\" *ngIf=\"errormessage\">\n    {{ errormessage }}\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/register/register.component.html": 
        /*!********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/register/register.component.html ***!
          \********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<form #signUpForm=\"ngForm\" (ngSubmit)=\"signUpForm.valid && onSubmit(signUpForm)\">\n    <input type=\"text\" #name=\"ngModel\" [(ngModel)]=\"this.userService.user.name\" name=\"name\"\n        placeholder=\"Nom\" required [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !name.valid }\">\n    <div *ngIf=\"signUpForm.submitted && !name.valid\">\n        <label class=\"validation-message\">Ce champs est obligatoire.</label>\n    </div>\n    <input type=\"text\" #email=\"ngModel\" [(ngModel)]=\"this.userService.user.email\" name=\"email\" placeholder=\"Email\"\n        required [pattern]=\"emailRegex\" [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !email.valid }\">\n    <div *ngIf=\"signUpForm.submitted && email.errors\">\n        <label *ngIf=\"email.errors.required\" class=\"validation-message\">Ce champs est obligatoire.</label>\n        <label *ngIf=\"email.errors.pattern\" class=\"validation-message\">L'adresse mail n'est pas valide.</label>\n    </div>\n    <input type=\"password\" #password=\"ngModel\" [(ngModel)]=\"this.userService.user.password\" name=\"password\"\n        placeholder=\"Mot de passe\" minlength=\"8\" required\n        [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !password.valid }\">\n    <div *ngIf=\"signUpForm.submitted && password.errors\">\n        <label *ngIf=\"password.errors.required\" class=\"validation-message\">Ce champs est obligatoire.</label>\n        <label *ngIf=\"password.errors.minlength\" class=\"validation-message\">Le mot de passe doit contenir au moins 8 caractères.</label>\n    </div>\n    <input type=\"submit\" value=\"Sign Up\">\n</form>\n\n<!-- Success message -->\n<div class=\"success\" *ngIf=\"successmessage\">\n    Inscription réussie\n</div>\n\n<!-- Error message -->\n<div class=\"alert\" *ngIf=\"errormessage\">\n    {{errormessage}}\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <div id=\"formContent\">\n    <h2 class=\"underlineHover\" routerLink=\"/login\" routerLinkActive=\"active\"> Se connecter </h2>\n    <h2 class=\"underlineHover\" routerLink=\"/register\" routerLinkActive=\"active\"> S'inscrire </h2>\n    <router-outlet></router-outlet>\n  </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
            /* harmony import */ var _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/user/register/register.component */ "./src/app/components/user/register/register.component.ts");
            /* harmony import */ var _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user/login/login.component */ "./src/app/components/user/login/login.component.ts");
            /* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
            /* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
            /* harmony import */ var _components_dashboard_listprojets_listprojets_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dashboard/listprojets/listprojets.component */ "./src/app/components/dashboard/listprojets/listprojets.component.ts");
            /* harmony import */ var _components_dashboard_detailprojet_detailprojet_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/dashboard/detailprojet/detailprojet.component */ "./src/app/components/dashboard/detailprojet/detailprojet.component.ts");
            var routes = [
                {
                    path: 'register', component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"],
                    children: [{
                            path: '', component: _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
                        }]
                },
                {
                    path: 'login', component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"],
                    children: [{
                            path: '', component: _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
                        }]
                },
                {
                    path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
                    children: [
                        { path: 'projects', component: _components_dashboard_listprojets_listprojets_component__WEBPACK_IMPORTED_MODULE_8__["ListprojetsComponent"], pathMatch: 'full' },
                        { path: 'projects/:id', component: _components_dashboard_detailprojet_detailprojet_component__WEBPACK_IMPORTED_MODULE_9__["DetailprojetComponent"], pathMatch: 'full' }
                    ]
                },
                {
                    path: '', redirectTo: '/login', pathMatch: 'full'
                }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'front-cdp2019-grp2-eq3';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
            /* harmony import */ var _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/user/register/register.component */ "./src/app/components/user/register/register.component.ts");
            /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
            /* harmony import */ var _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/user/login/login.component */ "./src/app/components/user/login/login.component.ts");
            /* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
            /* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/auth.interceptor */ "./src/app/auth/auth.interceptor.ts");
            /* harmony import */ var _components_dashboard_listprojets_listprojets_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/dashboard/listprojets/listprojets.component */ "./src/app/components/dashboard/listprojets/listprojets.component.ts");
            /* harmony import */ var _components_dashboard_detailprojet_detailprojet_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/dashboard/detailprojet/detailprojet.component */ "./src/app/components/dashboard/detailprojet/detailprojet.component.ts");
            /* harmony import */ var _services_projet_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/projet.service */ "./src/app/services/projet.service.ts");
            /* harmony import */ var _services_issues_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/issues.service */ "./src/app/services/issues.service.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _components_user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"],
                        _components_user_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                        _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
                        _components_user_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                        _components_dashboard_listprojets_listprojets_component__WEBPACK_IMPORTED_MODULE_14__["ListprojetsComponent"],
                        _components_dashboard_detailprojet_detailprojet_component__WEBPACK_IMPORTED_MODULE_15__["DetailprojetComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
                    ],
                    providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"], _services_projet_service__WEBPACK_IMPORTED_MODULE_16__["ProjetService"], _services_issues_service__WEBPACK_IMPORTED_MODULE_17__["IssuesService"], _auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"],
                        {
                            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
                            useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_13__["AuthInterceptor"],
                            multi: true
                        }],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/auth/auth.guard.ts": 
        /*!************************************!*\
          !*** ./src/app/auth/auth.guard.ts ***!
          \************************************/
        /*! exports provided: AuthGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function () { return AuthGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AuthGuard = /** @class */ (function () {
                function AuthGuard(router) {
                    this.router = router;
                }
                AuthGuard.prototype.canActivate = function (next, state) {
                    return true;
                };
                return AuthGuard;
            }());
            AuthGuard.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthGuard);
            /***/ 
        }),
        /***/ "./src/app/auth/auth.interceptor.ts": 
        /*!******************************************!*\
          !*** ./src/app/auth/auth.interceptor.ts ***!
          \******************************************/
        /*! exports provided: AuthInterceptor */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () { return AuthInterceptor; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var AuthInterceptor = /** @class */ (function () {
                function AuthInterceptor(userService, router) {
                    this.userService = userService;
                    this.router = router;
                }
                AuthInterceptor.prototype.intercept = function (req, next) {
                    var _this = this;
                    req = req.clone({
                        withCredentials: true
                    });
                    return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (event) { }, function (err) {
                        if (err.error.auth == false) {
                            _this.router.navigateByUrl('/login');
                        }
                    }));
                };
                return AuthInterceptor;
            }());
            AuthInterceptor.ctorParameters = function () { return [
                { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], AuthInterceptor);
            /***/ 
        }),
        /***/ "./src/app/components/dashboard/dashboard.component.scss": 
        /*!***************************************************************!*\
          !*** ./src/app/components/dashboard/dashboard.component.scss ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/dashboard/dashboard.component.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/components/dashboard/dashboard.component.ts ***!
          \*************************************************************/
        /*! exports provided: DashboardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () { return DashboardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var DashboardComponent = /** @class */ (function () {
                function DashboardComponent(userService, router) {
                    this.userService = userService;
                    this.router = router;
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.userService.getDashboard().subscribe(function (res) {
                        _this.userService.setToken(res['user']);
                        _this.userInfos = res['user'];
                    }, function (err) { });
                };
                DashboardComponent.prototype.logout = function () {
                    var _this = this;
                    this.userService.logout().subscribe(function (res) {
                        localStorage.removeItem('userinfos');
                        _this.router.navigate(['login']);
                    }, function (err) { });
                };
                return DashboardComponent;
            }());
            DashboardComponent.ctorParameters = function () { return [
                { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-dashboard',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/components/dashboard/dashboard.component.scss")).default]
                })
            ], DashboardComponent);
            /***/ 
        }),
        /***/ "./src/app/components/dashboard/detailprojet/detailprojet.component.scss": 
        /*!*******************************************************************************!*\
          !*** ./src/app/components/dashboard/detailprojet/detailprojet.component.scss ***!
          \*******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2RldGFpbHByb2pldC9kZXRhaWxwcm9qZXQuY29tcG9uZW50LnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/dashboard/detailprojet/detailprojet.component.ts": 
        /*!*****************************************************************************!*\
          !*** ./src/app/components/dashboard/detailprojet/detailprojet.component.ts ***!
          \*****************************************************************************/
        /*! exports provided: DetailprojetComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailprojetComponent", function () { return DetailprojetComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_issues_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/issues.service */ "./src/app/services/issues.service.ts");
            /* harmony import */ var src_app_services_projet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/projet.service */ "./src/app/services/projet.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tasks.service */ "./src/app/services/tasks.service.ts");
            /* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
            var DetailprojetComponent = /** @class */ (function () {
                function DetailprojetComponent(issuesService, projetService, tasksService, userService, route) {
                    this.issuesService = issuesService;
                    this.projetService = projetService;
                    this.tasksService = tasksService;
                    this.userService = userService;
                    this.route = route;
                    this.issues = [];
                    this.users = [];
                    this.modelIssue = {
                        issueId: '',
                        description: '',
                        priorite: '',
                        difficulte: '0',
                        status: '0'
                    };
                    this.modelIssueEdit = {
                        _id: '',
                        issueID: '',
                        description: '',
                        priorite: '',
                        difficulte: '0',
                        status: '0'
                    };
                    this.modelTask = {
                        issue: '0',
                        description: '',
                        cout: '',
                        developer: '0'
                    };
                    this.modelTaskEdit = {
                        _id: '',
                        issue: '0',
                        description: '',
                        cout: '',
                        developer: '0'
                    };
                    this.modelproject = {
                        title: '',
                        description: ''
                    };
                    this.isCreator = false;
                }
                DetailprojetComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.project_id = this.route.snapshot.paramMap.get('id');
                    this.getProject();
                    this.userService.getUsers().subscribe(function (data) { _this.users = data['users']; });
                };
                DetailprojetComponent.prototype.getProject = function () {
                    var _this = this;
                    this.projetService.getProject(this.project_id).subscribe(function (data) {
                        _this.project = data['project'];
                        _this.idLogged = _this.userService.getIDOflogged();
                        if (_this.project.creator['_id'] == _this.idLogged) {
                            _this.isCreator = true;
                        }
                        else {
                            _this.isCreator = false;
                        }
                        _this.modelproject.title = _this.project.title;
                        _this.modelproject.description = _this.project.description;
                    });
                };
                DetailprojetComponent.prototype.removeIssue = function (id) {
                    var _this = this;
                    this.issuesService.removeIssue(this.project['_id'], id).subscribe(function (data) { return _this.getProject(); });
                };
                DetailprojetComponent.prototype.removeTask = function (id) {
                    var _this = this;
                    this.tasksService.removeTask(this.project['_id'], id).subscribe(function (data) { return _this.getProject(); });
                };
                DetailprojetComponent.prototype.onSubmitIssue = function (form) {
                    var _this = this;
                    this.issuesService.addIssue(this.project['_id'], form.value).subscribe(function (res) {
                        form.resetForm();
                        _this.modelIssue.status = '0';
                        _this.modelIssue.difficulte = '0';
                        _this.getProject();
                    }, function (err) {
                        console.log(err);
                    });
                };
                DetailprojetComponent.prototype.onSubmitTask = function (form) {
                    var _this = this;
                    this.tasksService.addTask(this.project['_id'], form.value).subscribe(function (res) {
                        form.resetForm();
                        _this.modelTask.developer = '0';
                        _this.modelTask.issue = '0';
                        _this.getProject();
                    }, function (err) {
                        console.log(err);
                    });
                    console.log(this.project);
                };
                DetailprojetComponent.prototype.editProject = function (form) {
                    var _this = this;
                    console.log(form.value);
                    if (form.value.title === "" || form.value.description === "") {
                        this.getProject();
                        return;
                    }
                    this.projetService.editProject(this.project['_id'], form.value).subscribe(function (res) {
                        _this.getProject();
                    }, function (err) {
                        console.log(err);
                    });
                    console.log(this.project);
                };
                DetailprojetComponent.prototype.updateModalEditIssue = function (issue) {
                    this.modelIssueEdit._id = issue._id;
                    this.modelIssueEdit.issueID = issue.issueID;
                    this.modelIssueEdit.description = issue.description;
                    this.modelIssueEdit.priorite = issue.priorite;
                    this.modelIssueEdit.difficulte = issue.difficulte;
                    this.modelIssueEdit.status = issue.status;
                    console.log(this.modelIssueEdit._id);
                };
                DetailprojetComponent.prototype.updateModalEditTask = function (task) {
                    console.log(task);
                    this.modelTaskEdit._id = task._id;
                    this.modelTaskEdit.cout = task.cout;
                    this.modelTaskEdit.description = task.description;
                    this.modelTaskEdit.developer = task.developer;
                    this.modelTaskEdit.issue = task.idIssues[0];
                };
                DetailprojetComponent.prototype.onSubmitEditIssue = function (form) {
                    var _this = this;
                    this.issuesService.editIssue(this.project['_id'], this.modelIssueEdit._id, form.value).subscribe(function (res) {
                        form.resetForm();
                        _this.getProject();
                    }, function (err) {
                        console.log(err);
                    });
                };
                DetailprojetComponent.prototype.onSubmitEditTask = function (form) {
                    var _this = this;
                    this.tasksService.editTask(this.project['_id'], this.modelTaskEdit._id, form.value).subscribe(function (res) {
                        form.resetForm();
                        _this.getProject();
                    }, function (err) {
                        console.log(err);
                    });
                };
                return DetailprojetComponent;
            }());
            DetailprojetComponent.ctorParameters = function () { return [
                { type: src_app_services_issues_service__WEBPACK_IMPORTED_MODULE_2__["IssuesService"] },
                { type: src_app_services_projet_service__WEBPACK_IMPORTED_MODULE_3__["ProjetService"] },
                { type: src_app_services_tasks_service__WEBPACK_IMPORTED_MODULE_5__["TasksService"] },
                { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
            ]; };
            DetailprojetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-detailprojet',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detailprojet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/detailprojet/detailprojet.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detailprojet.component.scss */ "./src/app/components/dashboard/detailprojet/detailprojet.component.scss")).default]
                })
            ], DetailprojetComponent);
            /***/ 
        }),
        /***/ "./src/app/components/dashboard/listprojets/listprojets.component.scss": 
        /*!*****************************************************************************!*\
          !*** ./src/app/components/dashboard/listprojets/listprojets.component.scss ***!
          \*****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2xpc3Rwcm9qZXRzL2xpc3Rwcm9qZXRzLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/components/dashboard/listprojets/listprojets.component.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/components/dashboard/listprojets/listprojets.component.ts ***!
          \***************************************************************************/
        /*! exports provided: ListprojetsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListprojetsComponent", function () { return ListprojetsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_projet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/projet.service */ "./src/app/services/projet.service.ts");
            /* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
            var ListprojetsComponent = /** @class */ (function () {
                function ListprojetsComponent(projectsService, userService) {
                    this.projectsService = projectsService;
                    this.userService = userService;
                    this.projects = [];
                    this.model = {
                        title: '',
                        description: ''
                    };
                }
                ListprojetsComponent.prototype.ngOnInit = function () {
                    //this.idLogged = this.userService.getIDOflogged();
                    this.getProjects();
                };
                ListprojetsComponent.prototype.getProjects = function () {
                    var _this = this;
                    this.projectsService.getProjects().subscribe(function (data) { return _this.projects = data; });
                };
                ListprojetsComponent.prototype.removeProject = function (id) {
                    var _this = this;
                    this.projectsService.deleteProject(id).subscribe(function (data) { return _this.getProjects(); });
                };
                ListprojetsComponent.prototype.onSubmit = function (form) {
                    var _this = this;
                    this.projectsService.addProject(form.value).subscribe(function (res) {
                        form.resetForm();
                        _this.getProjects();
                    }, function (err) {
                        console.log(err);
                    });
                };
                return ListprojetsComponent;
            }());
            ListprojetsComponent.ctorParameters = function () { return [
                { type: src_app_services_projet_service__WEBPACK_IMPORTED_MODULE_2__["ProjetService"] },
                { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
            ]; };
            ListprojetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-listprojets',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./listprojets.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/listprojets/listprojets.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./listprojets.component.scss */ "./src/app/components/dashboard/listprojets/listprojets.component.scss")).default]
                })
            ], ListprojetsComponent);
            /***/ 
        }),
        /***/ "./src/app/components/user/login/login.component.scss": 
        /*!************************************************************!*\
          !*** ./src/app/components/user/login/login.component.scss ***!
          \************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/user/login/login.component.ts": 
        /*!**********************************************************!*\
          !*** ./src/app/components/user/login/login.component.ts ***!
          \**********************************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(userService, router) {
                    this.userService = userService;
                    this.router = router;
                    this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    this.model = {
                        email: '',
                        password: ''
                    };
                }
                LoginComponent.prototype.ngOnInit = function () {
                };
                LoginComponent.prototype.onSubmit = function (form) {
                    var _this = this;
                    this.userService.login(form.value).subscribe(function (res) {
                        _this.router.navigateByUrl('/dashboard/projects');
                    }, function (err) {
                        _this.errormessage = err.error.message;
                    });
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/components/user/login/login.component.scss")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/components/user/register/register.component.scss": 
        /*!******************************************************************!*\
          !*** ./src/app/components/user/register/register.component.scss ***!
          \******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/user/register/register.component.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/components/user/register/register.component.ts ***!
          \****************************************************************/
        /*! exports provided: RegisterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () { return RegisterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
            var RegisterComponent = /** @class */ (function () {
                function RegisterComponent(userService) {
                    this.userService = userService;
                    this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                }
                RegisterComponent.prototype.ngOnInit = function () {
                };
                RegisterComponent.prototype.onSubmit = function (form) {
                    var _this = this;
                    this.userService.postUser(form.value).subscribe(function (res) {
                        _this.successmessage = true;
                        setTimeout(function () { return _this.successmessage = false; }, 4000);
                        _this.resetForm(form);
                    }, function (err) {
                        if (err.status === 442) {
                            _this.errormessage = err.error.join('<br/>');
                        }
                        else {
                            _this.errormessage = 'Une erreur est survenue dans le serveur';
                        }
                    });
                };
                RegisterComponent.prototype.resetForm = function (form) {
                    this.userService.user = {
                        name: '',
                        email: '',
                        password: ''
                    };
                    form.resetForm();
                    this.errormessage = '';
                };
                return RegisterComponent;
            }());
            RegisterComponent.ctorParameters = function () { return [
                { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
            ]; };
            RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-register',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/register/register.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.scss */ "./src/app/components/user/register/register.component.scss")).default]
                })
            ], RegisterComponent);
            /***/ 
        }),
        /***/ "./src/app/components/user/user.component.scss": 
        /*!*****************************************************!*\
          !*** ./src/app/components/user/user.component.scss ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci91c2VyLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/components/user/user.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/components/user/user.component.ts ***!
          \***************************************************/
        /*! exports provided: UserComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function () { return UserComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var UserComponent = /** @class */ (function () {
                function UserComponent() {
                }
                UserComponent.prototype.ngOnInit = function () {
                };
                return UserComponent;
            }());
            UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-user',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user.component.scss */ "./src/app/components/user/user.component.scss")).default]
                })
            ], UserComponent);
            /***/ 
        }),
        /***/ "./src/app/services/issues.service.ts": 
        /*!********************************************!*\
          !*** ./src/app/services/issues.service.ts ***!
          \********************************************/
        /*! exports provided: IssuesService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssuesService", function () { return IssuesService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            var IssuesService = /** @class */ (function () {
                function IssuesService(httpClient) {
                    this.httpClient = httpClient;
                }
                IssuesService.prototype.getIssues = function (idProject) {
                    return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/projects/' + idProject + '/issues');
                };
                IssuesService.prototype.addIssue = function (idProject, issue) {
                    return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/projects/' + idProject + '/issues', issue);
                };
                IssuesService.prototype.editIssue = function (idProject, issueId, issue) {
                    return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/projects/' + idProject + '/issues/' + issueId, issue);
                };
                IssuesService.prototype.removeIssue = function (idProject, id) {
                    console.log(idProject + " hhhh" + id);
                    return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/projects/' + idProject + '/issues/' + id);
                };
                return IssuesService;
            }());
            IssuesService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            IssuesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], IssuesService);
            /***/ 
        }),
        /***/ "./src/app/services/projet.service.ts": 
        /*!********************************************!*\
          !*** ./src/app/services/projet.service.ts ***!
          \********************************************/
        /*! exports provided: ProjetService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetService", function () { return ProjetService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
            var ProjetService = /** @class */ (function () {
                function ProjetService(httpClient, userervice) {
                    this.httpClient = httpClient;
                    this.userervice = userervice;
                }
                ProjetService.prototype.getProjects = function () {
                    return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/projects');
                };
                ProjetService.prototype.getProject = function (id) {
                    return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/projects/' + id);
                };
                ProjetService.prototype.deleteProject = function (id) {
                    return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/projects/' + id);
                };
                ProjetService.prototype.addProject = function (project) {
                    return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/projects', project);
                };
                ProjetService.prototype.editProject = function (idProject, project) {
                    return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/projects/' + idProject, project);
                };
                return ProjetService;
            }());
            ProjetService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
            ]; };
            ProjetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ProjetService);
            /***/ 
        }),
        /***/ "./src/app/services/tasks.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/services/tasks.service.ts ***!
          \*******************************************/
        /*! exports provided: TasksService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksService", function () { return TasksService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            var TasksService = /** @class */ (function () {
                function TasksService(httpClient) {
                    this.httpClient = httpClient;
                }
                TasksService.prototype.getTasks = function (idProject) {
                    return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/projects/' + idProject + '/tasks');
                };
                TasksService.prototype.addTask = function (idProject, task) {
                    return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/projects/' + idProject + '/tasks', task);
                };
                TasksService.prototype.editTask = function (idProject, taskId, task) {
                    return this.httpClient.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/projects/' + idProject + '/tasks/' + taskId, task);
                };
                TasksService.prototype.removeTask = function (idProject, id) {
                    return this.httpClient.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_URL + '/projects/' + idProject + '/tasks/' + id);
                };
                return TasksService;
            }());
            TasksService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            TasksService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], TasksService);
            /***/ 
        }),
        /***/ "./src/app/services/user.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/services/user.service.ts ***!
          \******************************************/
        /*! exports provided: UserService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function () { return UserService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var UserService = /** @class */ (function () {
                //noAuthorized = { headers: new HttpHeaders({ 'NoAuth': 'true' }) };
                function UserService(httpClient) {
                    this.httpClient = httpClient;
                    this.user = {
                        name: '',
                        email: '',
                        password: ''
                    };
                }
                UserService.prototype.postUser = function (user) {
                    return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL + '/register', user);
                };
                UserService.prototype.login = function (infos) {
                    return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL + '/login', infos);
                };
                UserService.prototype.getUsers = function () {
                    return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL + '/users');
                };
                UserService.prototype.logout = function () {
                    return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL + '/logout');
                };
                UserService.prototype.setToken = function (infos) {
                    localStorage.setItem("userinfos", JSON.stringify({ infos: infos }));
                };
                UserService.prototype.removeToken = function () {
                };
                UserService.prototype.getUserInfos = function () {
                };
                UserService.prototype.getDashboard = function () {
                    return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_URL + '/dashboard');
                };
                UserService.prototype.getIDOflogged = function () {
                    var user = localStorage.getItem('userinfos');
                    return JSON.parse(user).infos._id;
                };
                return UserService;
            }());
            UserService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
            ]; };
            UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], UserService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false,
                API_URL: 'http://localhost:3000/api'
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /home/computeruser/Desktop/myprojectmanager-PROD/frontoffice/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map