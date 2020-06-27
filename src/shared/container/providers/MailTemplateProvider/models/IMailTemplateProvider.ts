import IParseMailTemplateDTO from '../dtos/IMailParseTemplateDTO';

export default interface IMailTemplateProvider {
  parse(data: IParseMailTemplateDTO): Promise<string>;
}
