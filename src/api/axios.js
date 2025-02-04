import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://rolling-api.vercel.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

const apiRoutes = {
  // Background Images
  getBackgroundImages: '/background-images/',
  // Profile Images
  getProfileImages: '/profile-images/',
  // Messages
  getMessages: (team, messageId) => `/${team}/messages/${messageId}/`,
  putMessage: (team, messageId) => `/${team}/messages/${messageId}/`,
  patchMessage: (team, messageId) => `/${team}/messages/${messageId}/`,
  deleteMessage: (team, messageId) => `/${team}/messages/${messageId}/`,
  // Recipients
  getRecipients: (team) => `/${team}/recipients/`,
  postRecipient: (team) => `/${team}/recipients/`,
  getRecipient: (team, recipientId) => `/${team}/recipients/${recipientId}/`,
  deleteRecipient: (team, recipientId) => `/${team}/recipients/${recipientId}/`,
  getRecipientMessages: (team, recipientId) => `/${team}/recipients/${recipientId}/messages/`,
  postRecipientMessage: (team, recipientId) => `/${team}/recipients/${recipientId}/messages/`,
  getRecipientReactions: (team, recipientId) => `/${team}/recipients/${recipientId}/reactions/`,
  postRecipientReaction: (team, recipientId) => `/${team}/recipients/${recipientId}/reactions/`,
};

const api = {
  // Background Images
  getBackgroundImages: () => apiClient.get(apiRoutes.getBackgroundImages),

  // Profile Images
  getProfileImages: () => apiClient.get(apiRoutes.getProfileImages),

  // Messages
  getMessages: (team, messageId) => apiClient.get(apiRoutes.getMessages(team, messageId)),
  putMessage: (team, messageId, data) => apiClient.put(apiRoutes.putMessage(team, messageId), data),
  patchMessage: (team, messageId, data) =>
    apiClient.patch(apiRoutes.patchMessage(team, messageId), data),
  deleteMessage: (team, messageId) => apiClient.delete(apiRoutes.deleteMessage(team, messageId)),

  // Recipients
  getRecipients: (team) => apiClient.get(apiRoutes.getRecipients(team)),
  postRecipient: (team, data) => apiClient.post(apiRoutes.postRecipient(team), data),
  getRecipient: (team, recipientId) => apiClient.get(apiRoutes.getRecipient(team, recipientId)),
  deleteRecipient: (team, recipientId) =>
    apiClient.delete(apiRoutes.deleteRecipient(team, recipientId)),

  // Recipient Messages
  getRecipientMessages: (team, recipientId) =>
    apiClient.get(apiRoutes.getRecipientMessages(team, recipientId)),
  postRecipientMessage: (team, recipientId, data) =>
    apiClient.post(apiRoutes.postRecipientMessage(team, recipientId), data),

  // Recipient Reactions
  getRecipientReactions: (team, recipientId) =>
    apiClient.get(apiRoutes.getRecipientReactions(team, recipientId)),
  postRecipientReaction: (team, recipientId, data) =>
    apiClient.post(apiRoutes.postRecipientReaction(team, recipientId), data),
};

export default api;
