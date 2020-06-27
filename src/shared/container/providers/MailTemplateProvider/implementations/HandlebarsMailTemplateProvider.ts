import handlebars from 'handlebars';

import IMailParseTemplateDTO from '../dtos/IMailParseTemplateDTO';
import IMailTemplateProvider from '../models/IMailTemplateProvider';

class HandlebarsMailProvider implements IMailTemplateProvider {
  public async parse({
    template,
    variables,
  }: IMailParseTemplateDTO): Promise<string> {
    const parseTemplate = handlebars.compile(template);

    return parseTemplate(variables);
  }
}

export default HandlebarsMailProvider;
