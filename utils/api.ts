import { Contact } from 'types';

export const submitContactForm = async (data: Contact) => {
  const send = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  });

  return await send.json();
};
