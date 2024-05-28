 const mongoose = require('mongoose');

const OrganizationDetailsSchema = new mongoose.Schema({
  npi: String,
  tin: String,
  type: String,
  name: String
});

const ContactSchema = new mongoose.Schema({
  addressLine1: String,
  addressLine2: String,
  city: String,
  state: String,
  zip: String,
  country: String
});

const PointOfContactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String
});

const OrganizationSchema = new mongoose.Schema({
  organizationdetails: [OrganizationDetailsSchema],
  email: String,
  mobileNumber: String,
  websiteUrl: String,
  contact: [ContactSchema],
  pointofcontact: [PointOfContactSchema],
  active: { type: Boolean, default: true },
  partOf: String,
  endpoint: String,
  //fhirData: mongoose.Schema.Types.Mixed // Field to store FHIR JSON data
});

module.exports = mongoose.model('Organization', OrganizationSchema);
