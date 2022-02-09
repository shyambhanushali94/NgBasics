export interface ResumeData{
    id:number,
    firstName: string,
    lastName: string,
    email: string,
    phoneNo: string,
    technicalSkills: string,
    experience: Experience,
    education: Education
}

class Experience{
    companyName:string;
    designation:string;
    description:string;
    startYear:number;
    endYear:number;
    
}
class Education{
    univercity:string;
    course:string;
    grade:number;
}