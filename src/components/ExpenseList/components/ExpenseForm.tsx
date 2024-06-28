import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "../Categories";
const schema = z.object({
  descripation: z
    .string()
    .min(3, { message: "descripation should be at least 3 characters" })
    .max(50),
  amount: z
    .number({ invalid_type_error: "Amount is required" })
    .min(0.01)
    .max(100_000),
  Category: z.enum(categories, {
    errorMap: () => ({ message: "category is required" }),
  }),
});
type ExpenseFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });
  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className="mb-3">
        <label htmlFor="descripation" className="form-label">
          Descripation
        </label>
        <input
          {...register("descripation")}
          id="descripation"
          type="text"
          className="form-control"
        />
        {errors.descripation && (
          <p className="text-danger">{errors.descripation.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select {...register("Category")} id="category" className="form-select">
          <option value=""></option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.Category && (
          <p className="text-danger">{errors.Category.message}</p>
        )}
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ExpenseForm;
