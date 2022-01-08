import RedirectUrlController from './RedirectUrlController';
import RedirectUrlUseCase from './RedirectUrlUseCase';

const redirectUrlUseCase = new RedirectUrlUseCase();
const redirectUrlController = new RedirectUrlController(redirectUrlUseCase);

export { redirectUrlController };