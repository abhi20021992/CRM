export interface Lead {
    FirstName: string;
    LastName?: any;
    Email: string;
    Phone: string;
    Mobile?: any;
    Address?: any;
    LeadSource: number;
    LeadStage: number;
    LeadStatus?: any;
    LeadOwner?: any;
    ProjectName: string;
    Company?: any;
    Website?: any;
    NoofBedRoom?: any;
    NoofKitchen?: any;
    Location?: any;
    Budget?: any;
    Possession?: any;
    Size?: any;
    Favourite: boolean;
    PropertyType: number;
    PropertyAge: number;
    Furnished: number;
    Vastu: number;
    Preference?: any;
    City?: any;
    Type?: any;
    CreatedBy?: any;
    ModifiedBy?: any;
    Id: number;
    CreatedOn: string;
    ModifiedOn?: any;
    IsDeleted: boolean;
    DeletedOn?: any;
  }

  export interface Leads{
      Leads:Lead[]
  }