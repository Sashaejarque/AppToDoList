import * as SQLite from 'expo-sqlite';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

const db = SQLite.openDatabase('tasks.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL)'),
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        };
    });
  });
  return promise;
};

export const addTask = (title, id) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql('INSERT INTO tasks (title, id) VALUES(?,?);'),
        [title, id],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        };
    });
  });
  return promise;
};
export const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM tasks;',
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};
