import ChatComponents from './ChatComponents.jsx';
import styles from './ChatUi.module.scss';
import UserSettings from '../Settings/UserSettings.jsx';

/**
 * 聊天区的整体画布
 */
export const ChatUi = ({
  chapterId,
  lessonUpdate,
  onGoChapter,
  onPurchased,
  showUserSettings = false,
}) => {
  return (
    <div className={styles.ChatUi}>
      {
        <ChatComponents
          chapterId={chapterId}
          lessonUpdate={lessonUpdate}
          onGoChapter={onGoChapter}
          className={styles.chatComponents}
          onPurchased={onPurchased}
        />
      }
      {showUserSettings && <UserSettings className={styles.UserSettings} />}
    </div>
  );
};

export default ChatUi;
