import ShortenUrlController from './ShortenUrlController';
import ShortenUrlUseCase from './ShortenUrlUseCase';

const shortenUrlUseCase = new ShortenUrlUseCase();
const shortenUrlController = new ShortenUrlController(shortenUrlUseCase);

export { shortenUrlController };