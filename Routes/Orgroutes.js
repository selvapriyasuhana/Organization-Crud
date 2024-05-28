// const express = require('express');
// const router = express.Router();
// const Organization = require('../Model/Orgmodel');
// const nodemailer = require('nodemailer');
// const OrgController = require('../Controller/Orgcontroller');

// // Function to generate a random alphanumeric string of specified length
// function generateRandomString(length) {
//   const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   let randomString = '';
//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * charset.length);
//     randomString += charset[randomIndex];
//   }
//   return randomString;
// }

// // Function to generate a random number between min (inclusive) and max (inclusive)
// function generateRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// // Create a Nodemailer transporter
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'priyaecs95@gmail.com',
//     pass: 'kcqf yshl bjxk lzoh'
//   }
// });

// // POST method to create a new organization
// router.post('/organization', async (req, res) => {
//   //router.post('/organization', (req, res) => orgController.createOrganization(req, res));  
// try {
//     const org = new Organization(req.body);
//     await org.save();
    
//     const password = generateRandomString(10);
//     const username = `${req.body.firstName?.toLowerCase()}_${generateRandomString(8)}`;
//     const secretKey = generateRandomNumber(100000, 999999);

//     const mailOptions = {
//       from: 'priyaecs95@gmail.com',
//       to: req.body.email,
//       subject: 'Organization Registration Details',
//       html: `
//         <p>Hello ${req.body.email},</p>
//         <p>Your organization registration details:</p>
//         <ul>
//           <li>Username: ${username}</li>
//           <li>Password: ${password}</li>
//           <li>Secret Key: ${secretKey}</li>
//         </ul>
//         <p>Keep these details secure for login purposes.</p>
//       `
//     };
    
//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.log('Error sending email:', error);
//       } else {
//         console.log('Email sent:', info.response);
//       }
//     });
    
//     res.status(201).json({
//       message: {
        
//         description: "Organization Details Registered Successfully"
//       },
//       data: {
//         id: org._id,
//         organizationdetails: org.organizationdetails,
//         contact: org.contact,
//         email: org.email,
//         mobileNumber: org.mobileNumber,
//         websiteUrl: org.websiteUrl,
//         shift: org.shift,
//         proximityVerification: org.proximityVerification,
//         geofencing: org.geofencing,
//         q15Access: org.q15Access,
//         pointofcontact: org.pointofcontact,
//         hippaprivacyofficer: org.hippaprivacyofficer,
//         hippasecurityofficer: org.hippasecurityofficer,
//         userType: org.userType,
//         profile: org.profile,
//         createdAt: org.createdAt.toISOString().replace(/[:-]/g, '').replace(/\.\d+Z$/, '').replace('T', ''),
//         updatedAt: org.updatedAt,
//         active: org.active,
//         timeZone: org.timeZone
//       }
//     });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });
// // GET method to retrieve all organizations
// router.get('/organization', async (req, res) => {
//   try {
//     const organizations = await Organization.find();
//     const response = {
//       message: {
        
//         description: "Organization Details Retrieved Successfully"
//       },
//       data: organizations.map(org => ({
//         id: org._id,
//         organizationdetails: org.organizationdetails,
//         contact: org.contact,
//         email: org.email,
//         mobileNumber: org.mobileNumber,
//         websiteUrl: org.websiteUrl,
//         shift: org.shift,
//         proximityVerification: org.proximityVerification,
//         geofencing: org.geofencing,
//         q15Access: org.q15Access,
//         pointofcontact: org.pointofcontact,
//         hippaprivacyofficer: org.hippaprivacyofficer,
//         hippasecurityofficer: org.hippasecurityofficer,
//         userType: org.userType,
//         profile: org.profile,
//         createdAt: org.createdAt.toISOString().replace(/[:-]/g, '').replace(/\.\d+Z$/, '').replace('T', ''),
//         updatedAt: org.updatedAt,
//         active: org.active,
//         timeZone: org.timeZone
//       }))
//     };
//     res.status(200).json(response);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });
// // GET method to retrieve an organization by ID
// router.get('/organization/:id', async (req, res) => {
//   try {
//     const org = await Organization.findById(req.params.id);
//     if (!org) {
//       return res.status(404).json({ message: 'Organization not found' });
//     }
//     const response = {
//       message: {
//         description: "Organization Details Retrieved Successfully"
//       },
//       data: {
//         id: org._id,
//         organizationdetails: org.organizationdetails,
//         contact: org.contact,
//         email: org.email,
//         mobileNumber: org.mobileNumber,
//         websiteUrl: org.websiteUrl,
//         shift: org.shift,
//         proximityVerification: org.proximityVerification,
//         geofencing: org.geofencing,
//         q15Access: org.q15Access,
//         pointofcontact: org.pointofcontact,
//         hippaprivacyofficer: org.hippaprivacyofficer,
//         hippasecurityofficer: org.hippasecurityofficer,
//         userType: org.userType,
//         profile: org.profile,
//         createdAt: org.createdAt.toISOString().replace(/[:-]/g, '').replace(/\.\d+Z$/, '').replace('T', ''),
//         updatedAt: org.updatedAt,
//         active: org.active,
//         timeZone: org.timeZone
//       }
//     };
//     res.status(200).json(response);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });
// // PUT method to update an organization by ID
// router.put('/organization/:id', async (req, res) => {
//   try {
//     const updatedOrg = await Organization.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true, runValidators: true }
//     );

//     if (!updatedOrg) {
//       return res.status(404).json({ message: 'Organization not found' });
//     }

//     res.status(200).json({
//       message: {
        
//         description: "Organization Updated Successfully"
//       },
//       data: {
//         id: updatedOrg._id,
//         organizationdetails: updatedOrg.organizationdetails,
//         contact: updatedOrg.contact,
//         email: updatedOrg.email,
//         mobileNumber: updatedOrg.mobileNumber,
//         websiteUrl: updatedOrg.websiteUrl,
//         shift: updatedOrg.shift,
//         proximityVerification: updatedOrg.proximityVerification,
//         geofencing: updatedOrg.geofencing,
//         q15Access: updatedOrg.q15Access,
//         pointofcontact: updatedOrg.pointofcontact,
//         hippaprivacyofficer: updatedOrg.hippaprivacyofficer,
//         hippasecurityofficer: updatedOrg.hippasecurityofficer,
//         userType: updatedOrg.userType,
//         profile: updatedOrg.profile,
//         createdAt: updatedOrg.createdAt.toISOString().replace(/[:-]/g, '').replace(/\.\d+Z$/, '').replace('T', ''),
//         updatedAt: updatedOrg.updatedAt,
//         active: updatedOrg.active,
//         timeZone: updatedOrg.timeZone
//       }
//     });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // DELETE method to delete an organization by ID
// router.delete('/organization/:id', async (req, res) => {
//   try {
//     const org = await Organization.findByIdAndDelete(req.params.id);
//     if (!org) {
//       return res.status(404).json({ message: 'Organization not found' });
//     }
//     res.status(200).json({
//       message: {
        
//         description: " Given Organization Id Details Deleted Successfully"
//       }
//     });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// router.route("/organization").post(OrgController.createOrganization);
// router.route("/organization").get(OrgController.getAllOrganizations);
// router.route("/organization/:id").get(OrgController.getOrganizationById);
// router.route("/organization/:id").post(OrgController.updateOrganization);
// router.route("/organization/:id").post(OrgController.deleteOrganization);

// module.exports = router;
const express = require('express');
const router = express.Router();
const Organization = require('../Model/Orgmodel');
const nodemailer = require('nodemailer');

// Function to generate a random alphanumeric string of specified length
function generateRandomString(length) {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    randomString += charset[randomIndex];
  }
  return randomString;
}

// Function to generate a random number between min (inclusive) and max (inclusive)
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'priyaecs95@gmail.com',
    pass: 'kcqf yshl bjxk lzoh'
  }
});
/**
 * @swagger
 * components:
 *   schemas:
 *     Organization:
 *       type: object
 *       properties:
 *         organizationdetails:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/OrganizationDetails'
 *         email:
 *           type: string
 *         mobileNumber:
 *           type: string
 *         websiteUrl:
 *           type: string
 *         contact:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Contact'
 *         pointofcontact:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/PointOfContact'
 *         active:
 *           type: boolean
 *         partOf:
 *           type: string
 *         endpoint:
 *           type: string
 * 
 *     OrganizationDetails:
 *       type: object
 *       properties:
 *         npi:
 *           type: string
 *         tin:
 *           type: string
 *         type:
 *           type: string
 *         name:
 *           type: string
 * 
 *     Contact:
 *       type: object
 *       properties:
 *         addressLine1:
 *           type: string
 *         addressLine2:
 *           type: string
 *         city:
 *           type: string
 *         state:
 *           type: string
 *         zip:
 *           type: string
 *         country:
 *           type: string
 * 
 *     PointOfContact:
 *       type: object
 *       properties:
 *         firstName:
 *           type: string
 *         lastName:
 *           type: string
 *         email:
 *           type: string
 *         phoneNumber:
 *           type: string
 */


const toFhirOrganization = (org) => {
  console.log("Processing organization for FHIR conversion:", org);

  if (!org.organizationdetails || org.organizationdetails.length === 0) {
    console.error("organizationdetails is missing or empty");
    return {
      resourceType: "Organization",
      id: org._id.toString(),
      active: org.active,
      contact: [],
      identifier: [],
      type: [],
      telecom: [],
      address: [],
      endpoint: []
    };
  }

  const details = org.organizationdetails[0];

  const fhirOrg = {
    resourceType: "Organization",
    id: org._id.toString(),
    identifier: [
      { system: "http://hl7.org/fhir/sid/us-npi", value: details.npi },
      { system: "http://hl7.org/fhir/sid/us-tin", value: details.tin }
    ],
    active: org.active,
    type: [
      { text: details.type }
    ],
    name: details.name,
    telecom: [
      { system: "email", value: org.email, use: "work" },
      { system: "phone", value: org.mobileNumber, use: "work" },
      { system: "url", value: org.websiteUrl, use: "work" }
    ],
    address: org.contact.map(c => ({
      use: "work",
      line: [c.addressLine1, c.addressLine2].filter(Boolean),
      city: c.city,
      state: c.state,
      postalCode: c.zip.toString(),
      country: c.country
    })),
    contact: org.pointofcontact.map(poc => ({
      name: { text: `${poc.firstName} ${poc.lastName}` },
      telecom: [
        { system: "email", value: poc.email },
        { system: "phone", value: poc.phoneNumber }
      ]
    })),
    partOf: org.partOf ? { reference: org.partOf } : undefined,
    endpoint: org.endpoint ? [{ reference: org.endpoint }] : []
  };

  console.log("Generated FHIR organization:", fhirOrg);

  return fhirOrg;
};

/**
 * @swagger
 * /organization:
 *   post:
 *     summary: Create a new organization
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Organization'
 *     responses:
 *       201:
 *         description: Organization created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Organization'
 *       400:
 *         description: Bad request
 */
router.post('/organization', async (req, res) => {
  try {
    console.log("Received request body:", req.body);

    if (!req.body.organizationdetails || req.body.organizationdetails.length === 0) {
      throw new Error("organizationdetails is missing or empty");
    }

    const org = new Organization(req.body);
    await org.save();

    console.log("Saved organization:", org);

    const password = generateRandomString(10);
    const username = `${req.body.firstName?.toLowerCase()}_${generateRandomString(8)}`;
    const secretKey = generateRandomNumber(100000, 999999);

    const mailOptions = {
      from: 'priyaecs95@gmail.com',
      to: req.body.email,
      subject: 'Organization Registration Details',
      html: `
        <p>Hello ${req.body.email},</p>
        <p>Your organization registration details:</p>
        <ul>
          <li>Username: ${username}</li>
          <li>Password: ${password}</li>
          <li>Secret Key: ${secretKey}</li>
        </ul>
        <p>Keep these details secure for login purposes.</p>
      `
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });

    const fhirOrg = toFhirOrganization(org);
    console.log("Converted FHIR organization:", fhirOrg);
    // org.fhirData = fhirOrg; // Assuming 'fhirData' is the field in your schema
    // await org.save(); 
    res.status(201).json(fhirOrg);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(400).json({ message: error.message });
  }
});
/**
 * @swagger
 * /organizations:
 *   get:
 *     summary: Get all organizations
 *     responses:
 *       200:
 *         description: A list of organizations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Organization'
 */
router.get('/organizations', async (req, res) => {
  try {
    const organizations = await Organization.find();
    const response = organizations.map(org => toFhirOrganization(org));
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
// router.get('/organizations', async (req, res) => {
//   try {
//     const organizations = await Organization.find();
//     if (!organizations) {
//       return res.status(404).json({ message: 'No organizations found' });
//     }
//     const response = organizations.map(org => toFhirOrganization(org));
//     res.status(200).json(response);
//   } catch (error) {
//     console.error('Error fetching organizations:', error);
//     res.status(400).json({ message: error.message });
//   }
// });

/**
 * @swagger
 * /organization/{id}:
 *   get:
 *     summary: Get an organization by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The organization ID
 *     responses:
 *       200:
 *         description: The organization description by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Organization'
 *       404:
 *         description: Organization not found
 */
// GET method to retrieve an organization by ID
router.get('/organization/:id', async (req, res) => {
  try {
    const org = await Organization.findById(req.params.id);
    if (!org) {
      return res.status(404).json({ message: 'Organization not found' });
    }
    const fhirOrg = toFhirOrganization(org);
    res.status(200).json(fhirOrg);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
/**
 * @swagger
 * /organization/{id}:
 *   put:
 *     summary: Update an Organization Details By ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the organization to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Organization'
 *     responses:
 *       200:
 *         description: Organization updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Organization'
 *       400:
 *         description: Bad request
 */
router.put('/organization/:id', async (req, res) => {
  try {
    const orgId = req.params.id;
    const updatedOrgData = req.body;

    console.log("Received updated organization data:", updatedOrgData);

    const org = await Organization.findByIdAndUpdate(orgId, updatedOrgData, { new: true });

    if (!org) {
      throw new Error("Organization not found");
    }

    console.log("Updated organization:", org);

    const fhirOrg = toFhirOrganization(org);
    console.log("Converted FHIR organization:", fhirOrg);

    res.status(200).json(fhirOrg);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(400).json({ message: error.message });
  }
});

/**
 * @swagger
 * /organization/{id}:
 *   delete:
 *     summary: Delete an organization by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the organization to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success message after deleting organization
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Message indicating successful deletion
 *       400:
 *         description: Bad request
 *       404:
 *         description: Organization not found
 */
// DELETE method to delete an organization by ID
router.delete('/organization/:id', async (req, res) => {
  try {
    const org = await Organization.findByIdAndDelete(req.params.id);
    if (!org) {
      return res.status(404).json({ message: 'Organization not found' });
    }
    res.status(200).json({
      message: "Given Organization Id Details Deleted Successfully"
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;

