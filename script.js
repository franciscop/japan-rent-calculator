const toStr = num =>
  new Intl.NumberFormat("ja-JA", { style: "currency", currency: "JPY" }).format(
    num
  );

const $result = u(".result");
const setText = (sel, val) => {
  const prev = $result.find(sel).text();
  if (prev === val) return;
  $result.find(sel).text(val);
};

setInterval(() => {
  forn(data => {
    const monthly = Number(data.monthly);
    const stay = Number(data.stay) * 12;
    const key = Number(data.key);
    const deposit = Number(data.deposit);
    const estate = Number(data.estate);
    const guarantor = Number(data.guarantor);

    const totalMonthly = monthly * stay;
    setText(".monthly", toStr(monthly));
    setText(".stay", `(${data.stay} x 12)`);
    setText(".totalMonthly", toStr(totalMonthly));

    const totalKey = monthly * key;
    setText(".key", key);
    setText(".totalKey", toStr(totalKey));

    const totalDeposit = monthly * deposit;
    setText(".deposit", deposit);
    setText(".totalDeposit", toStr(totalDeposit));

    const totalEstate = monthly * estate * 1.1;
    setText(".estate", `${estate} x 1.10`);
    setText(".totalEstate", toStr(totalEstate));

    const totalGuarantor = monthly * guarantor * 1.1;
    setText(".guarantor",`${guarantor} x 1.10`);
    setText(".totalGuarantor", toStr(totalGuarantor));

    const total =
      totalMonthly + totalKey + totalDeposit + totalEstate + totalGuarantor;
    setText(".total", toStr(total));

    const average = total / stay;
    const diff = ((100 * (average - monthly)) / monthly).toFixed(1);
    setText(".average", `(+${diff}%) ${toStr(average)}`);
  })(u("form").first());
}, 1000);
