import { TutorialRepository } from "../../repositories/implementations/TutorialRepository";
import { CreateTutorialService } from "../../services/CreateTutorialService";
import { CreateTutorialController } from "./CreateTutorialController";



const tutorialRepository = new TutorialRepository;
const tutorialervice = new CreateTutorialService(tutorialRepository);
const createTutorialController = new CreateTutorialController(tutorialervice);

export { createTutorialController };
