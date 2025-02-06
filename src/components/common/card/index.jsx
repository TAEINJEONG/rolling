import CardHeader from './CardHeader';
import CardContent from './CardContent';

const Card = ({ name, profileImg, relationship, messageContent, createdAtMessage, onDelete }) => {
  return (
    <>
      <section className="w-sm h-[280px] bg-white rounded-2xl shadow-[0_2px_12px_0_rgba(0,0,0,0.08)] flex items-center justify-center">
        <article className="w-full h-full relative px-6 pb-6 pt-7">
          <CardHeader
            profileImg={profileImg}
            name={name}
            relationship={relationship}
            onDelete={onDelete}
            showDeleteButton={true}
          />
          <CardContent messageContent={messageContent} createdAtMessage={createdAtMessage} />
        </article>
      </section>
    </>
  );
};

export default Card;
