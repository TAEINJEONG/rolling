import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://rolling-api.vercel.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fileClient = axios.create({
  baseURL: 'https://fandom-k-api.vercel.app',
  headers: {
    'Content-Type': 'multipart/form-data',
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
    list: (team) => `/${team}/recipients/`,
    detail: (team, recipientId) => `/${team}/recipients/${recipientId}/`,
    messages: (team, recipientId) => `/${team}/recipients/${recipientId}/messages/`,
    reactions: (team, recipientId) => `/${team}/recipients/${recipientId}/reactions/`,
  },
};

const api = {
  // Background Images
  getBackgroundImages: () => apiClient.get(apiRoutes.backgroundImages),

  // Profile Images
  getProfileImages: () => apiClient.get(apiRoutes.profileImages),

  // File Upload
  uploadFile: (data) => fileClient.post('/images/upload', data),

  // Messages
  getMessages: (team, messageId) => apiClient.get(apiRoutes.messages(team, messageId)),
  putMessages: (team, messageId, data) => apiClient.put(apiRoutes.messages(team, messageId), data),
  patchMessages: (team, messageId, data) =>
    apiClient.patch(apiRoutes.messages(team, messageId), data),
  deleteMessages: (team, messageId) => apiClient.delete(apiRoutes.messages(team, messageId)),

  // Recipients
  getRecipientsList: (team, offset, limit) =>
    apiClient.get(apiRoutes.recipients.list(team), { params: { offset, limit } }),
  getRecipientById: (team, recipientId) =>
    apiClient.get(apiRoutes.recipients.detail(team, recipientId)),
  postRecipients: (team, data) => apiClient.post(apiRoutes.recipients.list(team), data),
  deleteRecipients: (team, recipientId) =>
    apiClient.delete(apiRoutes.recipients.detail(team, recipientId)),

  // Recipient Messages
  getRecipientsMessages: (team, recipientId, offset, limit) =>
    apiClient.get(apiRoutes.recipients.messages(team, recipientId), { params: { offset, limit } }),
  postRecipientsMessages: (team, recipientId, data) =>
    apiClient.post(apiRoutes.recipients.messages(team, recipientId), data),

  // Recipient Reactions
  getRecipientsReactions: (team, recipientId, offset, limit) =>
    apiClient.get(apiRoutes.recipients.reactions(team, recipientId), { params: { offset, limit } }),
  postRecipientsReactions: (team, recipientId, data) =>
    apiClient.post(apiRoutes.recipients.reactions(team, recipientId), data),
};

export default api;
