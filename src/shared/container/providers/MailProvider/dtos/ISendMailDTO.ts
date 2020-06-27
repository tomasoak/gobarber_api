import IMailParseTemplateDTO from '../../MailTemplateProvider/dtos/IMailParseTemplateDTO';

interface IMailContact {
  name: string;
  email: string;
}

export default interface ISendMailDTO {
  to: IMailContact;
  from?: IMailContact;
  subject: string;
  templateData: IMailParseTemplateDTO;
}
