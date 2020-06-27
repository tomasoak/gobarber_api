import IMailParseTemplateDTO from '../dtos/IMailParseTemplateDTO';
import IMailTemplateProvider from '../models/IMailTemplateProvider';

class FakeMailTemplateProvider implements IMailTemplateProvider {
  public async parse({ template }: IMailParseTemplateDTO): Promise<string> {
    return template;
  }
}

export default FakeMailTemplateProvider;
