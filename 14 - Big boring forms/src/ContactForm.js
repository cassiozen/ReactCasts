import { useState } from "react";
import "./ContactForm.css";

function useMarkedFields() {
  const [touchedFields, setTouchedFields] = useState({ all: false });
  const setFieldTouched = (event) => {
    setTouchedFields((touchedFields) => ({
      ...touchedFields,
      [event.target.name]: true,
    }));
  };

  const setAllFieldsTouched = (event) => {
    setTouchedFields({ all: true });
  };

  const bindField = (fieldName) => ({
    "data-touched": touchedFields.all || touchedFields[fieldName],
    onBlur: setFieldTouched,
  });

  return [bindField, setAllFieldsTouched];
}

export default function ContactForm() {
  const [bindField, setAllFieldsTouched] = useMarkedFields();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
      }}
    >
      <fieldset>
        <label htmlFor="name">
          NAME <em>*</em>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          {...bindField("name")}
          required
        />
        <div className="form-reqs">Name is Required</div>
      </fieldset>

      <fieldset>
        <label htmlFor="email">
          EMAIL <em>*</em>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          {...bindField("email")}
          required
        />
        <div className="form-reqs">A valid Email is Required</div>
      </fieldset>

      <fieldset>
        <label htmlFor="orderNumber">ORDER NUMBER</label>
        <input
          id="orderNumber"
          name="orderNumber"
          type="text"
          {...bindField("orderNumber")}
          pattern="[A-z]{3}[0-9]{4}"
        />
        <div className="form-reqs">
          An order number should have three letters and 4 numbers
        </div>
      </fieldset>

      <fieldset>
        <label htmlFor="note">YOUR MESSAGE</label>
        <textarea id="note" name="note" rows="4"></textarea>
      </fieldset>

      <button onClick={() => setAllFieldsTouched()} type="submit">
        SUBMIT
      </button>
    </form>
  );
}
