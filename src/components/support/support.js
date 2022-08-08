import Button from "../Button";

export default function SupportSubmission() {
  const categories = ["Appeal Ban", "Account", "Account Deletion"];

  async function onSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2">
      <select className="rounded-md h-10 p-2">
        {categories.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
      <input
        type="text"
        name="subject"
        id="subject"
        placeholder="Subject..."
        className="p-2 h-10 rounded-md"
      />

      <textarea
        cols={4}
        rows={4}
        className="resize-none rounded-md p-2"
        placeholder="Please describe your issue as best as possible."
      ></textarea>
      <Button>Submit</Button>
    </form>
  );
}
