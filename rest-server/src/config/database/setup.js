import {
  createUserTable,
  dropUserTable,
  createCredentialsTable,
  dropCredentialsTable,
  createFriendsTable,
  dropFriendsTable,
  createMessagesTable,
  dropMessagesTable,
  createMessageRecipiantTable,
  dropMessageRecipiantTable
} from '../../lib/SQL';

const setup = async(err) => {
  // await dropDatabase();
  await dropCredentialsTable();
  await dropFriendsTable();
  await dropMessageRecipiantTable();
  await dropMessagesTable();
  await dropUserTable();

  // await createDatabase();
  // await useDatabase();
  await createUserTable();
  await createCredentialsTable();
  await createFriendsTable();
  await createMessagesTable();
  await createMessageRecipiantTable();
  if (err) throw err;
  process.exit();
};

setup();