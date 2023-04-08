


// File: businessCardInfo.ts
// Description: This file contains the model for the business card information
// implement business card information model with typescript class and export it for use in other files

// create a class called BusinessCardInfo
export class BusinessCardInfo {
    // create a property called businessName of type string
    businessName: string;
    // create a property called businessAddress of type string
    businessAddress: string;
    // create a property called businessPhone of type string
    businessPhone: string;
    // create a property called businessEmail of type string
    businessEmail: string;
    // create a property called businessWebsite of type string
    businessWebsite: string;
    // create a property called businessLogo of type string
    businessLogo: string;
    // create properties for social media links
    facebookLink: string;   
    twitterLink: string;
    instagramLink: string;
    linkedinLink: string;
    youtubeLink: string;


    //create a constructor for the BusinessCardInfo class and initialize the properties

    constructor(businessName: string, businessAddress: string, businessPhone: string, businessEmail: string, businessWebsite: string, businessLogo: string, facebookLink: string, twitterLink: string, instagramLink: string, linkedinLink: string, youtubeLink: string) {
        this.businessName = businessName;
        this.businessAddress = businessAddress;
        this.businessPhone = businessPhone;
        this.businessEmail = businessEmail;
        this.businessWebsite = businessWebsite;
        this.businessLogo = businessLogo;
        this.facebookLink = facebookLink;
        this.twitterLink = twitterLink;
        this.instagramLink = instagramLink;
        this.linkedinLink = linkedinLink;
        this.youtubeLink = youtubeLink;
    }

          

   
    // create static method called getBusinessCardInfo
    static getBusinessCardInfo() {  
        // return a new instance of the BusinessCardInfo class
        return new BusinessCardInfo('Tu Espacio MKT', 'domicilio conocido', '9993606511', 'presenciadigital03@gmail.com', 'www.jomatconsultores.com', '', 'https://www.facebook.com/tuespaciomktoriente/', 'Your Twitter Link', 'Your Instagram Link', 'Your Linkedin Link', 'Your Youtube Link');
    }
}