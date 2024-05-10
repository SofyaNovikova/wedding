import "./Form.css";

const FORM_LINK = "https://forms.gle/oYQqLrhyAjMnwhWB6";

export const Form = () => {
  const onClick = () => window.open(FORM_LINK, "_blank");
  return (
    <div className="container">
      <p className="title">
        Здесь вы найдете
        <br />
        всю необходимую информацию
      </p>
      <p className="text">
        Ближе к дате вы сможете заранее ознакомиться с рассадкой гостей.
      </p>
      <p className="text">
        Также будем вам благодарны за заполнение анкеты, где можно указать
        предпочитаемый вид алкоголя и наличие пищевой аллергии.
      </p>
      <p className="text bold underline centered">
        Пожалуйста, заполните анкету на каждого гостя в отдельности!
      </p>
      <button onClick={onClick} className="form-button">
        Заполнить анкету
      </button>
    </div>
  );
};
