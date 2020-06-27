import { container } from 'tsyringe';

import IHashProvider from './HashProvider/models/IHashProvider';
import BCrytHashProvider from './HashProvider/implementations/BCryptHashProvider';

container.registerSingleton<IHashProvider>('HashProvider', BCrytHashProvider);
