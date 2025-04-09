import { Router } from 'express';
import ChatController from '../controllers/chat.controller';

export default function(ChatController: ChatController) {
  const router = Router();

  router.get('/', ChatController.getAllChats.bind(ChatController));
  router.get('/:id', ChatController.getChatById.bind(ChatController));
  router.post('/', ChatController.createChat.bind(ChatController));
  router.put('/:id', ChatController.updateChat.bind(ChatController));
  router.delete('/:id', ChatController.deleteChat.bind(ChatController));

  return router;
}
