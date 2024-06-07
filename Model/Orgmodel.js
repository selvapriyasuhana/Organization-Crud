 const mongoose = require('mongoose');

const OrganizationDetailsSchema = new mongoose.Schema({
  npi: String,
  tin: String,
  type: String,
  name: String
},{ _id: false });

const ContactSchema = new mongoose.Schema({
  addressLine1: String,
  addressLine2: String,
  city: String,
  state: String,
  zip: String,
  country: String
},{ _id: false });

const PointOfContactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String
},{ _id: false });

const EndpointSchema = new mongoose.Schema({
  //endpoint: String
  reference: String
},{ _id: false });


const OrganizationSchema = new mongoose.Schema({
  organizationdetails: [OrganizationDetailsSchema],
  email: String,
  mobileNumber: String,
  websiteUrl: String,
  contact: [ContactSchema],
  pointofcontact: [PointOfContactSchema],
  active: { type: Boolean, default: true },
  //partOf: String,
  endpoint: [EndpointSchema]
 //endpoint: String,
  //fhirData: mongoose.Schema.Types.Mixed // Field to store FHIR JSON data
});

module.exports = mongoose.model('Organizationcrud', OrganizationSchema);
