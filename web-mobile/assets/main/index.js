System.register("chunks:///_virtual/AudioManager.ts",["cc"],(function(){var e;return{setters:[function(t){e=t.cclegacy}],execute:function(){e._RF.push({},"8062dxNy0NMsKagad53ejO+","AudioManager",void 0),e._RF.pop()}}}));

System.register("chunks:///_virtual/AuthManager.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,r,n,s,a;return{setters:[function(e){t=e.createClass,r=e.asyncToGenerator,n=e.regeneratorRuntime},function(e){s=e.cclegacy,a=e._decorator}],execute:function(){var c,u;s._RF.push({},"92f565aJulHFK/LclFHvq2s","AuthManager",void 0);var o=a.ccclass;e("AuthManager",o("AuthManager")(((u=function(){function e(){this.baseUrl="http://127.0.0.1:4000"}var s=e.prototype;return s.login=function(){var e=r(n().mark((function e(t,r){var s,a;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("Calling API:",this.baseUrl+"/auth/login"),e.next=4,fetch(this.baseUrl+"/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({username:t,password:r})});case 4:return s=e.sent,console.log("Status:",s.status),e.next=8,s.json();case 8:if(a=e.sent,s.ok){e.next=11;break}return e.abrupt("return",{success:!1,message:a.message||"Login failed"});case 11:return e.abrupt("return",{success:!0,user:a.user});case 14:return e.prev=14,e.t0=e.catch(0),console.error("LOGIN ERROR:",e.t0),e.abrupt("return",{success:!1,message:"Network error"});case 18:case"end":return e.stop()}}),e,this,[[0,14]])})));return function(t,r){return e.apply(this,arguments)}}(),s.checkLogin=function(){var e=r(n().mark((function e(){var t;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(this.baseUrl+"/auth/me",{method:"GET",credentials:"include"});case 3:return t=e.sent,console.log("Check login status:",t.status),e.abrupt("return",t.ok);case 8:return e.prev=8,e.t0=e.catch(0),console.error("CHECK LOGIN ERROR:",e.t0),e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),s.logout=function(){var e=r(n().mark((function e(){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(this.baseUrl+"/auth/logout",{method:"POST",credentials:"include"});case 3:console.log("Logged out"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error("LOGOUT ERROR:",e.t0);case 9:case"end":return e.stop()}}),e,this,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),t(e,null,[{key:"instance",get:function(){return this._instance||(this._instance=new e),this._instance}}]),e}())._instance=void 0,c=u))||c);s._RF.pop()}}}));

System.register("chunks:///_virtual/Constants.ts",["cc"],(function(){var t;return{setters:[function(n){t=n.cclegacy}],execute:function(){t._RF.push({},"efd73p1wfNNE4zxw2GtD6uD","Constants",void 0),t._RF.pop()}}}));

System.register("chunks:///_virtual/EnemyAI.ts",["cc"],(function(){var t;return{setters:[function(c){t=c.cclegacy}],execute:function(){t._RF.push({},"c74cb0FfxtG9a/SPSPstJhF","EnemyAI",void 0),t._RF.pop()}}}));

System.register("chunks:///_virtual/EnemySpawner.ts",["cc"],(function(){var e;return{setters:[function(n){e=n.cclegacy}],execute:function(){e._RF.push({},"c3be6UzUTJAHLG+ahEN5pBS","EnemySpawner",void 0),e._RF.pop()}}}));

System.register("chunks:///_virtual/EnemyStats.ts",["cc"],(function(){var t;return{setters:[function(e){t=e.cclegacy}],execute:function(){t._RF.push({},"d4a70yWnWdF+anvf85+Z9/h","EnemyStats",void 0),t._RF.pop()}}}));

System.register("chunks:///_virtual/EventManager.ts",["cc"],(function(){var e;return{setters:[function(n){e=n.cclegacy}],execute:function(){e._RF.push({},"3caf8wrLyNEnrnazc7mAeqq","EventManager",void 0),e._RF.pop()}}}));

System.register("chunks:///_virtual/GameManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./AuthManager.ts"],(function(e){var n,t,r,a,c,o,u,s;return{setters:[function(e){n=e.inheritsLoose,t=e.asyncToGenerator,r=e.regeneratorRuntime},function(e){a=e.cclegacy,c=e._decorator,o=e.Component,u=e.director},function(e){s=e.AuthManager}],execute:function(){var i;a._RF.push({},"e888cJR7+NAWLp4t8U2tAmf","GameManager",void 0);var p=c.ccclass;e("GameManager",p("GameManager")(i=function(e){function a(){return e.apply(this,arguments)||this}return n(a,e),a.prototype.start=function(){var e=t(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.instance.checkLogin();case 2:e.sent?u.loadScene("Menu"):u.loadScene("Login");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a}(o))||i);a._RF.pop()}}}));

System.register("chunks:///_virtual/HUD.ts",["cc"],(function(){var e;return{setters:[function(t){e=t.cclegacy}],execute:function(){e._RF.push({},"8ee83Pgy+9MQLR+nAe018yX","HUD",void 0),e._RF.pop()}}}));

System.register("chunks:///_virtual/InventorySystem.ts",["cc"],(function(){var e;return{setters:[function(t){e=t.cclegacy}],execute:function(){e._RF.push({},"e13f6n4+lNEYrOgKAaTPlWg","InventorySystem",void 0),e._RF.pop()}}}));

System.register("chunks:///_virtual/InventoryUI.ts",["cc"],(function(){var e;return{setters:[function(t){e=t.cclegacy}],execute:function(){e._RF.push({},"3ae81vLM3ZAWK7KqsiB+o2E","InventoryUI",void 0),e._RF.pop()}}}));

System.register("chunks:///_virtual/LevelSystem.ts",["cc"],(function(){var e;return{setters:[function(t){e=t.cclegacy}],execute:function(){e._RF.push({},"899e9Xs4DhLQ6P4EFMCjcSn","LevelSystem",void 0),e._RF.pop()}}}));

System.register("chunks:///_virtual/Logger.ts",["cc"],(function(){var e;return{setters:[function(c){e=c.cclegacy}],execute:function(){e._RF.push({},"68f76Duc8xCQq7AzPE4qvNr","Logger",void 0),e._RF.pop()}}}));

System.register("chunks:///_virtual/LoginUI.ts",["./rollupPluginModLoBabelHelpers.js","cc","./AuthManager.ts"],(function(e){var n,t,r,i,a,s,o,u,l,c,p,g,b;return{setters:[function(e){n=e.applyDecoratedDescriptor,t=e.inheritsLoose,r=e.initializerDefineProperty,i=e.assertThisInitialized,a=e.asyncToGenerator,s=e.regeneratorRuntime},function(e){o=e.cclegacy,u=e._decorator,l=e.EditBox,c=e.Label,p=e.Component,g=e.director},function(e){b=e.AuthManager}],execute:function(){var f,h,m,L,d,y,I,w,v;o._RF.push({},"1a8b7/AKYRG6b9tnh4zLgi6","LoginUI",void 0);var x=u.ccclass,z=u.property;e("LoginUI",(f=x("LoginUI"),h=z(l),m=z(l),L=z(c),f((I=n((y=function(e){function n(){for(var n,t=arguments.length,a=new Array(t),s=0;s<t;s++)a[s]=arguments[s];return n=e.call.apply(e,[this].concat(a))||this,r(n,"emailInput",I,i(n)),r(n,"passwordInput",w,i(n)),r(n,"messageLabel",v,i(n)),n}return t(n,e),n.prototype.onLoginClick=function(){var e=a(s().mark((function e(){var n,t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.emailInput.string,t=this.passwordInput.string,n&&t){e.next=5;break}return this.messageLabel.string="Please enter email and password",e.abrupt("return");case 5:return this.messageLabel.string="Logging in...",e.next=8,b.instance.login(n,t);case 8:if((r=e.sent).success){e.next=12;break}return this.messageLabel.string=r.message,e.abrupt("return");case 12:this.messageLabel.string="Login successful",g.loadScene("Menu");case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n}(p)).prototype,"emailInput",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=n(y.prototype,"passwordInput",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=n(y.prototype,"messageLabel",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),d=y))||d));o._RF.pop()}}}));

System.register("chunks:///_virtual/LootSystem.ts",["cc"],(function(){var t;return{setters:[function(e){t=e.cclegacy}],execute:function(){t._RF.push({},"b7787zNVwVMPozaAdGJghNF","LootSystem",void 0),t._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./EventManager.ts","./GameManager.ts","./StateMachine.ts","./EnemyAI.ts","./EnemySpawner.ts","./EnemyStats.ts","./AudioManager.ts","./AuthManager.ts","./ResourceManager.ts","./SceneManager.ts","./UIManager.ts","./RoomManager.ts","./SocketClient.ts","./SyncManager.ts","./PlayerAttack.ts","./PlayerController.ts","./PlayerMovement.ts","./PlayerStats.ts","./InventorySystem.ts","./LevelSystem.ts","./LootSystem.ts","./QuestSystem.ts","./SaveSystem.ts","./SkillSystem.ts","./HUD.ts","./InventoryUI.ts","./LoginUI.ts","./MenuUI.ts","./SkillUI.ts","./Constants.ts","./Logger.ts","./MathUtil.ts","./RandomUtil.ts"],(function(){return{setters:[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/MathUtil.ts",["cc"],(function(){var t;return{setters:[function(e){t=e.cclegacy}],execute:function(){t._RF.push({},"5516e33RVBKG7ENsa/zd5GV","MathUtil",void 0),t._RF.pop()}}}));

System.register("chunks:///_virtual/MenuUI.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,i,r,o,n,l,s,a,c,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,r=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){n=e.cclegacy,l=e._decorator,s=e.Node,a=e.Sprite,c=e.Color,u=e.Component}],execute:function(){var p,d,h,g,f,N,v,b,y,w,C;n._RF.push({},"b6e138GZYVEJLJ88G3Ma9lc","MenuUI",void 0);var m=l.ccclass,z=l.property;e("MenuUi",(p=m("MenuUi"),d=z(s),h=z(s),g=z(a),f=z(a),p((b=t((v=function(e){function t(){for(var t,i=arguments.length,n=new Array(i),l=0;l<i;l++)n[l]=arguments[l];return t=e.call.apply(e,[this].concat(n))||this,r(t,"targetNode1",b,o(t)),r(t,"targetNode2",y,o(t)),r(t,"sprite1",w,o(t)),r(t,"sprite2",C,o(t)),t.selectedColor=new c(255,255,255,255),t.unselectedColor=new c(255,255,255,160),t}i(t,e);var n=t.prototype;return n.onClickSprite1=function(){this.sprite1&&(this.sprite1.color=this.selectedColor),this.sprite2&&(this.sprite2.color=this.unselectedColor)},n.onClickSprite2=function(){this.sprite2&&(this.sprite2.color=this.selectedColor),this.sprite1&&(this.sprite1.color=this.unselectedColor)},n.setActiveNode1=function(){this.targetNode1?this.targetNode1.active=!0:console.warn("Target node is null")},n.setUnactiveNode1=function(){this.targetNode1?this.targetNode1.active=!1:console.warn("Target node is null")},n.setActiveNode2=function(){this.targetNode2?this.targetNode2.active=!0:console.warn("Target node is null")},n.setUnactiveNode2=function(){this.targetNode2?this.targetNode2.active=!1:console.warn("Target node is null")},t}(u)).prototype,"targetNode1",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=t(v.prototype,"targetNode2",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=t(v.prototype,"sprite1",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=t(v.prototype,"sprite2",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),N=v))||N));n._RF.pop()}}}));

System.register("chunks:///_virtual/PlayerAttack.ts",["cc"],(function(){var t;return{setters:[function(c){t=c.cclegacy}],execute:function(){t._RF.push({},"4ad32MDq/BAN60w3wXTN+LQ","PlayerAttack",void 0),t._RF.pop()}}}));

System.register("chunks:///_virtual/PlayerController.ts",["cc"],(function(){var e;return{setters:[function(r){e=r.cclegacy}],execute:function(){e._RF.push({},"ee71fAU8fFH9a+rF8bZ+Nm5","PlayerController",void 0),e._RF.pop()}}}));

System.register("chunks:///_virtual/PlayerMovement.ts",["cc"],(function(){var e;return{setters:[function(t){e=t.cclegacy}],execute:function(){e._RF.push({},"fead03K61RJiIYavt8Czs5S","PlayerMovement",void 0),e._RF.pop()}}}));

System.register("chunks:///_virtual/PlayerStats.ts",["cc"],(function(){var t;return{setters:[function(e){t=e.cclegacy}],execute:function(){t._RF.push({},"883caH6ByJLdI2KnISZq3uO","PlayerStats",void 0),t._RF.pop()}}}));

System.register("chunks:///_virtual/QuestSystem.ts",["cc"],(function(){var t;return{setters:[function(e){t=e.cclegacy}],execute:function(){t._RF.push({},"a1651rW46JJCpSg7n+/yP56","QuestSystem",void 0),t._RF.pop()}}}));

System.register("chunks:///_virtual/RandomUtil.ts",["cc"],(function(){var t;return{setters:[function(e){t=e.cclegacy}],execute:function(){t._RF.push({},"a8e9fhJCiNEbJBm/eN8IukF","RandomUtil",void 0),t._RF.pop()}}}));

System.register("chunks:///_virtual/ResourceManager.ts",["cc"],(function(){var e;return{setters:[function(c){e=c.cclegacy}],execute:function(){e._RF.push({},"219cb6RekdK8aKLToTU8zTT","ResourceManager",void 0),e._RF.pop()}}}));

System.register("chunks:///_virtual/RoomManager.ts",["cc"],(function(){var e;return{setters:[function(t){e=t.cclegacy}],execute:function(){e._RF.push({},"6c302hLkI5O0LPeHYdZmatB","RoomManager",void 0),e._RF.pop()}}}));

System.register("chunks:///_virtual/SaveSystem.ts",["cc"],(function(){var e;return{setters:[function(t){e=t.cclegacy}],execute:function(){e._RF.push({},"e5359eGwWNK9YMVWOSnoP8u","SaveSystem",void 0),e._RF.pop()}}}));

System.register("chunks:///_virtual/SceneManager.ts",["cc"],(function(){var e;return{setters:[function(c){e=c.cclegacy}],execute:function(){e._RF.push({},"866d1ooYvFHrpw6zwt0Tj0f","SceneManager",void 0),e._RF.pop()}}}));

System.register("chunks:///_virtual/SkillSystem.ts",["cc"],(function(){var t;return{setters:[function(e){t=e.cclegacy}],execute:function(){t._RF.push({},"431b4ln7XRF/q+qqxqMvWUx","SkillSystem",void 0),t._RF.pop()}}}));

System.register("chunks:///_virtual/SkillUI.ts",["cc"],(function(){var c;return{setters:[function(t){c=t.cclegacy}],execute:function(){c._RF.push({},"52c32SzOUFJ/YcayxovpPIb","SkillUI",void 0),c._RF.pop()}}}));

System.register("chunks:///_virtual/SocketClient.ts",["cc"],(function(){var t;return{setters:[function(e){t=e.cclegacy}],execute:function(){t._RF.push({},"b27432t4DFII4NYwP6oztId","SocketClient",void 0),t._RF.pop()}}}));

System.register("chunks:///_virtual/StateMachine.ts",["cc"],(function(){var t;return{setters:[function(e){t=e.cclegacy}],execute:function(){t._RF.push({},"4e3c1tm3WBCTZJMujtJVWd6","StateMachine",void 0),t._RF.pop()}}}));

System.register("chunks:///_virtual/SyncManager.ts",["cc"],(function(){var e;return{setters:[function(t){e=t.cclegacy}],execute:function(){e._RF.push({},"77ea1lNtEhA54apUEVL2tG9","SyncManager",void 0),e._RF.pop()}}}));

System.register("chunks:///_virtual/UIManager.ts",["cc"],(function(){var e;return{setters:[function(c){e=c.cclegacy}],execute:function(){e._RF.push({},"23948fzcuhOhI8MGO0Qilhv","UIManager",void 0),e._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});