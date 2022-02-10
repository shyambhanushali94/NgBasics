export interface ResumeData{
    id:number,
    firstName: string,
    lastName: string,
    designation:string,
    email: string,
    phoneNo: string,
    technicalSkills: TechnicalSkills[],
    experience: Experience[],
    education: Education[]
}

class TechnicalSkills{
    skillName:string
}

class Experience{
    companyName:string;
    designation:string;
    description:string;
    startYear:number;
    endYear:number;
    
}
class Education{
    university:string;
    course:string;
    grade:number;
}