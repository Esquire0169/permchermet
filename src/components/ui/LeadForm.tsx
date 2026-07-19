"use client";

import { useState } from "react";
import { Button } from "./Button";

type Props = {
  intent?: "scrap" | "pickup" | "calc" | "contact";
  compact?: boolean;
};

const intents = {
  scrap: "Сдать лом",
  pickup: "Заказать самовывоз",
  calc: "Рассчитать стоимость",
  contact: "Обратная связь",
};

export function LeadForm({ intent = "scrap", compact = false }: Props) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-sm border border-accent/30 bg-bg-card p-6 text-center">
        <p className="font-display text-lg uppercase tracking-[0.08em] text-accent">
          Заявка принята
        </p>
        <p className="mt-2 text-sm text-text-muted">
          Мы свяжемся с вами в ближайшее время. Для срочного расчета звоните{" "}
          <a className="text-accent" href="tel:+73422474767">
            +7 (342) 247-47-67
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <p className="font-display text-sm uppercase tracking-[0.14em] text-accent">
          {intents[intent]}
        </p>
        <span className="text-xs text-text-muted">Ответ в рабочее время</span>
      </div>

      <div className={`grid gap-3 ${compact ? "" : "md:grid-cols-2"}`}>
        <label className="block text-sm text-text-muted">
          Телефон *
          <input
            required
            name="phone"
            type="tel"
            placeholder="+7 (___) ___-__-__"
            className="mt-1 w-full rounded-sm border border-concrete bg-bg px-3 py-2.5 text-text outline-none transition focus:border-accent"
          />
        </label>
        <label className="block text-sm text-text-muted">
          Имя
          <input
            name="name"
            type="text"
            placeholder="Как к вам обращаться"
            className="mt-1 w-full rounded-sm border border-concrete bg-bg px-3 py-2.5 text-text outline-none transition focus:border-accent"
          />
        </label>
      </div>

      {(intent === "calc" || intent === "pickup" || intent === "scrap") && (
        <div className={`grid gap-3 ${compact ? "" : "md:grid-cols-2"}`}>
          <label className="block text-sm text-text-muted">
            Тип металла
            <select
              name="metal"
              className="mt-1 w-full rounded-sm border border-concrete bg-bg px-3 py-2.5 text-text outline-none transition focus:border-accent"
              defaultValue=""
            >
              <option value="" disabled>
                Выберите тип
              </option>
              <option>Черный лом</option>
              <option>Цветной лом</option>
              <option>Кабель</option>
              <option>АКБ</option>
              <option>Авто на утилизацию</option>
              <option>Другое</option>
            </select>
          </label>
          <label className="block text-sm text-text-muted">
            Примерный объем
            <input
              name="volume"
              type="text"
              placeholder="кг / тонны"
              className="mt-1 w-full rounded-sm border border-concrete bg-bg px-3 py-2.5 text-text outline-none transition focus:border-accent"
            />
          </label>
        </div>
      )}

      {(intent === "pickup" || intent === "calc") && (
        <label className="block text-sm text-text-muted">
          Адрес
          <input
            name="address"
            type="text"
            placeholder="Город, улица, объект"
            className="mt-1 w-full rounded-sm border border-concrete bg-bg px-3 py-2.5 text-text outline-none transition focus:border-accent"
          />
        </label>
      )}

      <label className="block text-sm text-text-muted">
        Комментарий
        <textarea
          name="comment"
          rows={compact ? 3 : 4}
          placeholder="Опишите лом или задачу"
          className="mt-1 w-full resize-y rounded-sm border border-concrete bg-bg px-3 py-2.5 text-text outline-none transition focus:border-accent"
        />
      </label>

      {(intent === "calc" || intent === "pickup") && (
        <label className="block text-sm text-text-muted">
          Фото лома
          <input
            name="photo"
            type="file"
            accept="image/*"
            className="mt-1 block w-full text-sm text-metal file:mr-3 file:rounded-sm file:border-0 file:bg-steel file:px-3 file:py-2 file:text-text"
          />
        </label>
      )}

      <Button type="submit" className="w-full md:w-auto">
        Отправить заявку
      </Button>
    </form>
  );
}
