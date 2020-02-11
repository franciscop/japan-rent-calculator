const toStr = num =>
  new Intl.NumberFormat("ja-JA", { style: "currency", currency: "JPY" }).format(
    num
  );

setInterval(() => {
  forn(data => {
    console.log("Tick!");
    const $result = u(".result");
    const monthly = Number(data.monthly);
    const stay = Number(data.stay) * 12;
    const key = Number(data.key);
    const deposit = Number(data.deposit);

    const totalMonthly = monthly * stay;
    $result.find(".monthly").text(toStr(monthly));
    $result.find(".stay").text(`(${data.stay} x 12)`);
    $result.find(".totalMonthly").text(toStr(totalMonthly));

    const totalKey = monthly * key;
    $result.find(".key").text(key);
    $result.find(".totalKey").text(toStr(totalKey));

    const totalDeposit = monthly * deposit;
    $result.find(".deposit").text(deposit);
    $result.find(".totalDeposit").text(toStr(totalDeposit));

    const total = totalMonthly + totalKey + totalDeposit;
    $result.find(".total").text(toStr(total));

    const average = total / stay;
    const diff = ((100 * (average - monthly)) / monthly).toFixed(1);
    $result.find(".average").text(`(+${diff}%) ${toStr(average)}`);
  })(u("form").first());
}, 1000);
