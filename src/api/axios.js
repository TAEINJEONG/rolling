import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://rolling-api.vercel.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

const apiRoutes = {
  // Background Images
  backgroundImages: '/background-images/',

  // Profile Images
  profileImages: '/profile-images/',

  // Messages
  messages: (team, messageId) => `/${team}/messages/${messageId}/`,

  // Recipients
  recipients: {
    base: (team, recipientId) =>
      recipientId ? `/${team}/recipients/${recipientId}/` : `/${team}/recipients/`,
    messages: (team, recipientId) => `/${team}/recipients/${recipientId}/messages/`,
    reactions: (team, recipientId) => `/${team}/recipients/${recipientId}/reactions/`,
  },
};

const api = {
  // Background Images
  getBackgroundImages: () => apiClient.get(apiRoutes.backgroundImages),

  // Profile Images
  getProfileImages: () => apiClient.get(apiRoutes.profileImages),

  // Messages
  getMessages: (team, messageId) => apiClient.get(apiRoutes.messages(team, messageId)),
  putMessages: (team, messageId, data) => apiClient.put(apiRoutes.messages(team, messageId), data),
  patchMessages: (team, messageId, data) =>
    apiClient.patch(apiRoutes.messages(team, messageId), data),
  deleteMessages: (team, messageId) => apiClient.delete(apiRoutes.messages(team, messageId)),

  // Recipients
  getRecipients: (team) => apiClient.get(apiRoutes.recipients.base(team)),
  postRecipients: (team, data) => apiClient.post(apiRoutes.recipients.base(team), data),
  getRecipients: (team, recipientId) => apiClient.get(apiRoutes.recipients.base(team, recipientId)),
  deleteRecipients: (team, recipientId) =>
    apiClient.delete(apiRoutes.recipients.base(team, recipientId)),

  // Recipient Messages
  getRecipientsMessages: (team, recipientId) =>
    apiClient.get(apiRoutes.recipients.messages(team, recipientId)),
  postRecipientsMessages: (team, recipientId, data) =>
    apiClient.post(apiRoutes.recipients.messages(team, recipientId), data),

  // Recipient Reactions
  getRecipientsReactions: (team, recipientId) =>
    apiClient.get(apiRoutes.recipients.reactions(team, recipientId)),
  postRecipientsReactions: (team, recipientId, data) =>
    apiClient.post(apiRoutes.recipients.reactions(team, recipientId), data),
};

export default api;
