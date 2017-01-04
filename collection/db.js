import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  Fiches = new Meteor.Collection('fiches');

});
