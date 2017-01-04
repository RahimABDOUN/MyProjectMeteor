import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.formulaire.events({
'submit #monFormulaire': function(e){
e.preventDefault();
var perso={nomUser:$('#nom').val(),domaineUser:$('#Do').val()}
$('#nom').val('');
$('#Domaine').val('');
Meteor.call('ficheCollIns',perso);
}
});
Template.liste.helpers({
mesFiches : function(){
var mesFi=Fiches.find();
return mesFi;
}
});
db.js (dans le dossier collections)
Fiches = new Meteor.Collection('fiches');
Meteor.methods({
ficheCollIns:function(p){
Fiches.insert(p)
}
});