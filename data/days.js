/* PSA Resit Trainer: the day-by-day curriculum.
 * Days are ordered by mark weight. Each day teaches new sections, warms up with
 * recall cards from earlier days, then mixes new items with spaced review items.
 */
window.PSA_DAYS = [
  {
    n: 1,
    title: "The exam & Prescribing",
    focus: ["prescribing"],
    weight: "80 of 200 marks",
    lesson: `
<h3>How the PSA is built</h3>
<p>Two hours, 60 items, 200 marks, eight sections. You get the online BNF throughout. Prescribing alone is 40% of the paper, which is why it comes first.</p>
<div class="tbl"><table>
<thead><tr><th>Section</th><th class="num">Items</th><th class="num">Marks each</th><th class="num">Total</th><th class="num">Time budget</th></tr></thead>
<tbody>
<tr class="hi"><td>Prescribing</td><td class="num">8</td><td class="num">10</td><td class="num">80</td><td class="num">36 min</td></tr>
<tr><td>Prescription Review</td><td class="num">8</td><td class="num">4</td><td class="num">32</td><td class="num">20 min</td></tr>
<tr><td>Planning Management</td><td class="num">8</td><td class="num">2</td><td class="num">16</td><td class="num">10 min</td></tr>
<tr><td>Providing Information</td><td class="num">6</td><td class="num">2</td><td class="num">12</td><td class="num">8 min</td></tr>
<tr><td>Calculation Skills</td><td class="num">8</td><td class="num">2</td><td class="num">16</td><td class="num">14 min</td></tr>
<tr><td>Adverse Drug Reactions</td><td class="num">8</td><td class="num">2</td><td class="num">16</td><td class="num">10 min</td></tr>
<tr><td>Drug Monitoring</td><td class="num">8</td><td class="num">2</td><td class="num">16</td><td class="num">10 min</td></tr>
<tr><td>Data Interpretation</td><td class="num">6</td><td class="num">2</td><td class="num">12</td><td class="num">8 min</td></tr>
</tbody></table></div>
<p class="note">The pass mark is standard-set for each sitting, so there is no fixed number to aim for. In this trainer, treat 75%+ in practice as "safe" and 85%+ as exam-ready.</p>

<h3>Using the BNF fast</h3>
<p>You have the BNF in the exam, so the skill being tested is finding the right line fast and reading it accurately. Learn where things live in a drug monograph:</p>
<ul>
<li><b>Indications and dose</b>: doses are listed <i>per indication and per route</i>. Always find the indication that matches the stem.</li>
<li><b>Contra-indications / Cautions</b>: scan these against the patient's history.</li>
<li><b>Interactions</b>: the link opens the interaction list for that drug, with severity.</li>
<li><b>Renal impairment / Hepatic impairment / Pregnancy / Breast feeding</b>: separate headings near the bottom.</li>
<li><b>Monitoring requirements</b> and <b>Patient and carer advice</b>: these answer Monitoring and Providing Information questions directly.</li>
<li><b>Treatment summaries</b> (e.g. "Asthma, acute", "Hyperkalaemia") give the first-line drug for a condition.</li>
</ul>
<p class="note">Time trap: don't look up what you already know. Use the BNF to <i>confirm a dose</i>, not to learn the topic in the exam.</p>

<h3>How a prescribing item is marked</h3>
<p>You write one prescription on a drug chart. The 10 marks split between choosing the right drug and writing it correctly (dose, route, frequency, timing). Choose a wrong or unsafe drug and the whole item scores zero, however well it's written. Choose an acceptable-but-not-best drug and you get partial marks.</p>
<p>This trainer scores it as: <b>drug 4</b> (best) or 2 (acceptable alternative), <b>dose 3</b>, <b>route 1</b>, <b>frequency 2</b>.</p>

<h3>The five-step routine for every prescribing item</h3>
<ol class="steps">
<li><b>Read the task line first.</b> "Prescribe ONE drug to reduce inflammation" tells you the drug class before you read the story.</li>
<li><b>Check the patient box:</b> allergies (penicillin!), weight, eGFR, pregnancy, age.</li>
<li><b>Check the current chart</b> for interactions, duplications and contraindications with your choice.</li>
<li><b>Pick the drug from the guideline</b> (NICE / BNF treatment summary). Pick first line unless something in the stem rules it out.</li>
<li><b>Pull the dose from the BNF</b> for <i>that indication and route</i>, then set the frequency and duration.</li>
</ol>

<h3>Writing rules that cost marks</h3>
<ul>
<li>Use the <b>approved (generic) name</b>, in capitals if the chart asks. Brands only where it matters (e.g. lithium, modified-release nifedipine, some inhalers).</li>
<li>Write <b>micrograms</b>, <b>nanograms</b> and <b>units</b> in full. Never "mcg", "µg", "ng", "U" or "IU".</li>
<li>No trailing zeros (<b>5 mg</b>, not 5.0 mg). Use a leading zero below 1 (<b>0.5 mL</b>), or better, switch units (500 micrograms).</li>
<li>Pick the right section: <b>once-only</b> (loading/stat doses), <b>regular</b>, <b>as required</b> (needs indication, minimum interval and max dose in 24 h), <b>infusions</b>.</li>
<li>Name the formulation when it matters: modified-release, oral solution, nebulised, inhaler device.</li>
<li>Give a <b>duration</b> or review date for antibiotics and steroids (e.g. "for 5 days").</li>
</ul>

<h3>High-yield first-line prescriptions</h3>
<div class="tbl"><table>
<thead><tr><th>Situation</th><th>Drug, dose, route, frequency</th></tr></thead>
<tbody>
<tr><td>Acute asthma (inflammation)</td><td>Prednisolone 40–50 mg oral once daily, ≥5 days</td></tr>
<tr><td>Low-severity CAP</td><td>Amoxicillin 500 mg oral three times daily, 5 days</td></tr>
<tr><td>Lower UTI (non-pregnant)</td><td>Nitrofurantoin MR 100 mg oral twice daily, 3 days (avoid eGFR &lt;45)</td></tr>
<tr><td>ACS loading</td><td>Aspirin 300 mg oral once, plus P2Y12 inhibitor (e.g. ticagrelor 180 mg)</td></tr>
<tr><td>Hyperkalaemia with ECG changes</td><td>Calcium gluconate 10% 30 mL IV over 10 min, then insulin 10 units + 25 g glucose</td></tr>
<tr><td>Anaphylaxis</td><td>Adrenaline 1 mg/mL: 500 micrograms (0.5 mL) IM, repeat after 5 min</td></tr>
<tr><td>VTE prophylaxis</td><td>Enoxaparin 40 mg SC once daily (20 mg if CrCl &lt;30)</td></tr>
<tr><td>Breakthrough pain, opioid-naive</td><td>Morphine oral solution 5–10 mg up to 4-hourly PRN</td></tr>
<tr><td>Hypoglycaemia, can't swallow, IV access</td><td>Glucose 10% 150–200 mL IV over 15 min</td></tr>
<tr><td>Hypoglycaemia, alert, can swallow</td><td>15–20 g fast-acting carbohydrate (e.g. 4–5 glucose tablets / 150–200 mL fruit juice)</td></tr>
<tr><td>Alcohol withdrawal</td><td>Chlordiazepoxide 20–30 mg oral four times daily, reducing; plus Pabrinex IV</td></tr>
<tr><td>AF rate control</td><td>Bisoprolol 2.5–5 mg oral once daily (or diltiazem)</td></tr>
<tr><td>Nausea in Parkinson's</td><td>Domperidone 10 mg oral up to three times daily</td></tr>
<tr><td>Acute pulmonary oedema</td><td>Furosemide 40 mg IV (higher if already on oral loop diuretic)</td></tr>
<tr><td>Acute gout, NSAID unsafe</td><td>Colchicine 500 micrograms oral 2–4 times daily</td></tr>
<tr><td>Constipation (opioid)</td><td>Stimulant + softener, e.g. senna 15 mg at night ± docusate; avoid bulk-forming</td></tr>
<tr><td>Post-op nausea</td><td>Cyclizine 50 mg up to 8-hourly or ondansetron 4 mg 8-hourly (avoid cyclizine in HF)</td></tr>
</tbody></table></div>
<p class="note">Fluids also appear in Prescribing. Maintenance for adults: about 25–30 mL/kg/day water, 1 mmol/kg/day each of Na⁺ and K⁺, 50–100 g/day glucose (NICE CG174). A typical 70 kg day: 2 L glucose 4% with sodium chloride 0.18% plus 20 mmol K⁺ per litre.</p>
`,
    recap: [],
    practice: ["P1", "P2", "P3", "P4", "P5", "P6", "P7", "P8"]
  },
  {
    n: 2,
    title: "Prescription Review",
    focus: ["review"],
    weight: "32 of 200 marks",
    lesson: `
<h3>What the section looks like</h3>
<p>You get a patient summary and a drug chart of about 6–10 medicines. Each item asks two questions, worth 2 marks each, such as: "Select the ONE prescription most likely to have caused…", "Select the ONE prescription that should be stopped / is contraindicated / has the wrong dose".</p>

<h3>Screen every line with the same five questions</h3>
<ol class="steps">
<li><b>Indicated?</b> Is there a reason for it in this patient?</li>
<li><b>Contraindicated?</b> Disease (asthma, HF, PUD), renal or liver function, pregnancy, age.</li>
<li><b>Interacting?</b> With another drug on the chart, especially anything new.</li>
<li><b>Right dose, route, frequency?</b> Weekly drugs written daily, weight-based doses, renal dose limits.</li>
<li><b>Causing the problem?</b> Match the presenting complaint to a drug's known adverse effects.</li>
</ol>
<p class="note">Clue words: "started 5 days ago", "recently increased", "new". The question nearly always points at the newest drug or its interaction partner.</p>

<h3>Interactions you must know without the BNF</h3>
<div class="tbl"><table>
<thead><tr><th>Combination</th><th>Result</th></tr></thead>
<tbody>
<tr><td>Warfarin + macrolides, fluconazole, metronidazole, ciprofloxacin, amiodarone</td><td>↑ INR / bleeding (enzyme inhibition)</td></tr>
<tr><td>Warfarin / COC / DOACs + rifampicin, carbamazepine, phenytoin, St John's wort</td><td>↓ effect (enzyme induction)</td></tr>
<tr><td>Simvastatin / atorvastatin + clarithromycin, erythromycin, itraconazole</td><td>Myopathy, rhabdomyolysis</td></tr>
<tr><td>Simvastatin + amlodipine / diltiazem</td><td>Cap simvastatin at 20 mg</td></tr>
<tr><td>Methotrexate + trimethoprim / co-trimoxazole</td><td>Bone marrow suppression</td></tr>
<tr><td>ACE inhibitor/ARB + diuretic + NSAID ("triple whammy")</td><td>AKI</td></tr>
<tr><td>ACEi/ARB + spironolactone, amiloride, trimethoprim, K⁺ supplements</td><td>Hyperkalaemia</td></tr>
<tr><td>Lithium + thiazides, ACEi/ARB, NSAIDs, dehydration</td><td>Lithium toxicity</td></tr>
<tr><td>SSRI + tramadol, triptans, MAOIs, linezolid, St John's wort</td><td>Serotonin syndrome</td></tr>
<tr><td>SSRI / NSAID + aspirin or anticoagulant</td><td>GI bleeding (add a PPI)</td></tr>
<tr><td>Digoxin + loop/thiazide diuretics (low K⁺), amiodarone, verapamil</td><td>Digoxin toxicity</td></tr>
<tr><td>Beta-blocker + verapamil</td><td>Heart block, asystole</td></tr>
<tr><td>Allopurinol + azathioprine / mercaptopurine</td><td>Marrow toxicity</td></tr>
<tr><td>QT drugs together: macrolides, quinolones, antipsychotics, citalopram, ondansetron, amiodarone</td><td>Torsades de pointes</td></tr>
<tr><td>Clopidogrel + omeprazole / esomeprazole</td><td>Reduced antiplatelet effect (use lansoprazole)</td></tr>
<tr><td>Gentamicin + furosemide / vancomycin</td><td>Oto- and nephrotoxicity</td></tr>
</tbody></table></div>
<p class="note">Enzyme <b>inhibitors</b> (raise levels): "SICKFACES.COM": Sodium valproate, Isoniazid, Cimetidine, Ketoconazole/fluconazole, Alcohol (acute), Chloramphenicol, Erythromycin/clarithromycin, Sulfonamides, Ciprofloxacin, Omeprazole, Metronidazole, plus amiodarone and grapefruit juice. <b>Inducers</b> (lower levels): "PC BRAS": Phenytoin, Carbamazepine, Barbiturates, Rifampicin, Alcohol (chronic), St John's wort.</p>

<h3>Drug causes of common presentations</h3>
<div class="tbl"><table>
<thead><tr><th>Problem</th><th>Usual suspects</th></tr></thead>
<tbody>
<tr><td>AKI</td><td>NSAIDs, ACEi/ARB, diuretics, gentamicin, vancomycin, contrast; withhold metformin and SGLT2i</td></tr>
<tr><td>Hyperkalaemia</td><td>ACEi, ARB, spironolactone, amiloride, trimethoprim, heparin, K⁺ supplements</td></tr>
<tr><td>Hypokalaemia</td><td>Loop and thiazide diuretics, salbutamol, steroids, insulin</td></tr>
<tr><td>Hyponatraemia</td><td>Thiazides, SSRIs, carbamazepine, PPIs, desmopressin</td></tr>
<tr><td>Confusion (older people)</td><td>Anticholinergics (oxybutynin, amitriptyline), opioids, benzodiazepines, Z-drugs, steroids</td></tr>
<tr><td>Falls / postural drop</td><td>Alpha-blockers, antihypertensives, diuretics, sedatives, nitrates</td></tr>
<tr><td>Constipation</td><td>Opioids, iron, calcium-channel blockers (verapamil), anticholinergics</td></tr>
<tr><td>Bleeding</td><td>Anticoagulants, antiplatelets, NSAIDs, SSRIs</td></tr>
<tr><td>Bradycardia</td><td>Beta-blockers, digoxin, verapamil, diltiazem, amiodarone</td></tr>
</tbody></table></div>

<h3>Contraindications that come up again and again</h3>
<ul>
<li>Non-selective beta-blockers (propranolol) in <b>asthma</b>.</li>
<li>NSAIDs in <b>heart failure, CKD/AKI, peptic ulcer</b>, and with anticoagulants.</li>
<li>Metformin when eGFR &lt;30 or in AKI. Nitrofurantoin when eGFR &lt;45.</li>
<li><b>Pregnancy</b>: ACEi/ARB, valproate, warfarin (1st trimester), methotrexate, tetracyclines, statins, trimethoprim (1st trimester). Folic acid 5 mg on antiepileptics.</li>
<li>Pioglitazone and non-dihydropyridine CCBs (verapamil, diltiazem) in heart failure.</li>
<li>Weekly drugs written as daily: <b>methotrexate</b>, <b>alendronic acid 70 mg</b>.</li>
</ul>
`,
    recap: [
      { q: "How are prescribing items scored if the drug choice is wrong?", a: "Zero for the whole item, however well the rest is written." },
      { q: "Prednisolone dose for acute asthma?", a: "40–50 mg oral once daily for at least 5 days." },
      { q: "First-line antibiotic for low-severity CAP?", a: "Amoxicillin 500 mg oral three times daily for 5 days." },
      { q: "Adrenaline dose and route in adult anaphylaxis?", a: "500 micrograms IM (0.5 mL of 1 mg/mL), repeat after 5 minutes if needed." },
      { q: "What must every PRN prescription include?", a: "Indication, dose, route, minimum interval and maximum dose in 24 hours." },
      { q: "Hyperkalaemia with ECG changes: first drug?", a: "Calcium gluconate 10% 30 mL IV over 10 minutes (stabilises myocardium; doesn't lower K⁺)." }
    ],
    practice: ["R1", "R2", "R3", "R4", "R5", "R6", "P9", "P10"]
  },
  {
    n: 3,
    title: "Calculation Skills",
    focus: ["calc"],
    weight: "16 of 200 marks",
    lesson: `
<h3>The one formula that solves most items</h3>
<p class="formula">Volume to give = (dose wanted ÷ dose in stock) × volume of stock</p>
<p>Write the units next to every number. If the units don't cancel to what the question asks for, the setup is wrong.</p>

<h3>Conversions to know cold</h3>
<div class="tbl"><table>
<thead><tr><th>Expression</th><th>Means</th><th>Example</th></tr></thead>
<tbody>
<tr><td>1 g</td><td>1,000 mg = 1,000,000 micrograms</td><td>0.5 mg = 500 micrograms</td></tr>
<tr><td>% w/v</td><td>grams per 100 mL</td><td>1% = 10 mg/mL; 5% glucose = 50 g/L</td></tr>
<tr><td>1 in 1,000</td><td>1 g in 1,000 mL = 1 mg/mL</td><td>Adrenaline IM</td></tr>
<tr><td>1 in 10,000</td><td>1 g in 10,000 mL = 100 micrograms/mL</td><td>Adrenaline IV in cardiac arrest</td></tr>
<tr><td>KCl 0.3%</td><td>3 g/L ≈ 40 mmol K⁺/L</td><td>0.15% ≈ 20 mmol/L</td></tr>
<tr><td>Sodium chloride 0.9%</td><td>9 g/L ≈ 154 mmol Na⁺/L</td><td></td></tr>
<tr><td>Insulin</td><td>100 units/mL</td><td>Always via insulin syringe or pen</td></tr>
</tbody></table></div>

<h3>Infusion rates</h3>
<ul>
<li><b>Pump (mL/hour)</b> = volume ÷ hours.</li>
<li><b>Gravity (drops/min)</b> = (volume in mL × drops per mL) ÷ minutes. Standard set: 20 drops/mL; blood set: 15 drops/mL.</li>
<li><b>Dose-per-kg-per-minute drugs</b>: dose per minute × 60 = dose per hour, then ÷ concentration (mg/mL) = mL/hour. Make the micrograms and mg units match first.</li>
</ul>

<h3>Opioid conversions (BNF approximations)</h3>
<div class="tbl"><table>
<thead><tr><th>From</th><th>Equivalent to oral morphine 10 mg</th></tr></thead>
<tbody>
<tr><td>Oral codeine / dihydrocodeine</td><td>100 mg</td></tr>
<tr><td>Oral tramadol</td><td>100 mg</td></tr>
<tr><td>Oral oxycodone</td><td>about 6.6 mg (oxycodone ≈ 1.5× morphine)</td></tr>
<tr><td>SC morphine</td><td>5 mg (oral → SC: divide by 2)</td></tr>
<tr><td>SC diamorphine</td><td>about 3.3 mg (oral morphine → SC diamorphine: divide by 3)</td></tr>
</tbody></table></div>
<ul>
<li>Total the 24-hour dose first. MR twice daily = 24-hour total ÷ 2.</li>
<li><b>Breakthrough</b> dose = one-sixth of the 24-hour total.</li>
<li>When switching opioid for toxicity, many guidelines reduce the calculated dose by 25–50%. Read the question.</li>
</ul>

<h3>Exam technique</h3>
<ul>
<li>Answers are typed into a box with the unit already shown. Give exactly the precision asked; round only at the end.</li>
<li>Do a sense check: 300 mL/hour of heparin, or 40 tablets per dose, means a decimal slipped.</li>
<li>Use the on-screen calculator. Don't do mental arithmetic under exam pressure.</li>
</ul>
`,
    recap: [
      { q: "What is the most likely interaction if INR rises after a new antibiotic?", a: "Macrolide (clarithromycin/erythromycin), metronidazole, fluconazole or ciprofloxacin inhibiting warfarin metabolism." },
      { q: "Methotrexate + which antibiotic causes marrow suppression?", a: "Trimethoprim (and co-trimoxazole), both antifolates." },
      { q: "Three drug classes in the 'triple whammy'?", a: "ACE inhibitor/ARB + diuretic + NSAID → AKI." },
      { q: "Which drug cause of hyperkalaemia hides in an antibiotic?", a: "Trimethoprim (amiloride-like ENaC blockade)." },
      { q: "Breakthrough analgesia for an opioid-naive patient?", a: "Morphine oral solution 5–10 mg up to every 4 hours when required." },
      { q: "Rate control in AF without heart failure or asthma?", a: "Beta-blocker, e.g. bisoprolol 2.5–5 mg oral once daily." }
    ],
    practice: ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "R7", "P11"]
  },
  {
    n: 4,
    title: "Adverse Reactions & Monitoring",
    focus: ["adr", "monitoring"],
    weight: "32 of 200 marks",
    lesson: `
<h3>Adverse Drug Reactions: what they ask</h3>
<p>Three question types: (1) which drug caused this, (2) what is the best management of this reaction, (3) what to report (Yellow Card).</p>

<h3>Classic drug → reaction pairs</h3>
<div class="tbl"><table>
<thead><tr><th>Drug</th><th>Reaction</th><th>Action</th></tr></thead>
<tbody>
<tr><td>ACE inhibitors</td><td>Dry cough; angioedema; hyperkalaemia; AKI</td><td>Cough → switch to ARB. Angioedema → stop for good</td></tr>
<tr><td>Amlodipine / nifedipine</td><td>Ankle oedema, flushing, headache</td><td>Reduce dose or switch class</td></tr>
<tr><td>Statins</td><td>Myalgia; myositis/rhabdomyolysis</td><td>CK &gt;10× ULN → stop</td></tr>
<tr><td>Fluoroquinolones</td><td>Tendinopathy/rupture, QT, C. difficile, seizures</td><td>Stop at first tendon pain</td></tr>
<tr><td>Metoclopramide, haloperidol</td><td>Acute dystonia (oculogyric crisis)</td><td>Procyclidine IV/IM</td></tr>
<tr><td>Carbimazole, clozapine</td><td>Agranulocytosis</td><td>Sore throat/fever → urgent FBC, stop if neutropenic</td></tr>
<tr><td>Amiodarone</td><td>Thyroid (hypo/hyper), pulmonary fibrosis, LFTs, photosensitivity, grey skin</td><td>6-monthly TFT/LFT</td></tr>
<tr><td>Gentamicin, vancomycin</td><td>Nephrotoxicity, ototoxicity</td><td>Levels; avoid loop diuretics</td></tr>
<tr><td>Opioids</td><td>Constipation, nausea, drowsiness, respiratory depression</td><td>Toxicity → naloxone 400 micrograms IV, repeat</td></tr>
<tr><td>Benzodiazepines</td><td>Sedation, respiratory depression</td><td>Flumazenil only in specific situations (seizure risk)</td></tr>
<tr><td>SSRIs</td><td>Hyponatraemia, GI bleeding, serotonin syndrome</td><td>Check Na⁺ in older people; PPI cover</td></tr>
<tr><td>Lithium</td><td>Tremor, polyuria (nephrogenic DI), hypothyroidism; toxicity: coarse tremor, D&amp;V, confusion</td><td>Levels, TFT, U&amp;E</td></tr>
<tr><td>Phenytoin</td><td>Gingival hyperplasia, hirsutism, ataxia, nystagmus</td><td>Levels</td></tr>
<tr><td>Spironolactone</td><td>Hyperkalaemia, gynaecomastia</td><td>U&amp;E</td></tr>
<tr><td>Steroids</td><td>Hyperglycaemia, psychosis, osteoporosis, adrenal suppression, infection</td><td>Bone protection; steroid card</td></tr>
<tr><td>Bisphosphonates</td><td>Oesophagitis; jaw osteonecrosis; atypical femoral fracture</td><td>Counsel on administration</td></tr>
<tr><td>Antibiotics (esp. clindamycin, cephalosporins, co-amoxiclav, quinolones)</td><td>C. difficile</td><td>Stop; oral vancomycin</td></tr>
<tr><td>Antipsychotics, macrolides, citalopram, ondansetron</td><td>QT prolongation</td><td>ECG, K⁺/Mg²⁺</td></tr>
</tbody></table></div>

<h3>Yellow Card rules</h3>
<ul>
<li><b>Black triangle ▼</b> (new) medicines: report <b>all</b> suspected reactions.</li>
<li>Established medicines: report <b>serious</b> reactions (fatal, life-threatening, disabling, hospitalisation, congenital), even well-known ones.</li>
<li>Children: report all reactions. Also report reactions to herbal products and vaccines.</li>
</ul>

<h3>Drug Monitoring: what, when, target</h3>
<p>Monitoring items ask about either <b>safety</b> (which bloods, how often) or <b>efficacy</b> (which measure shows it's working). The BNF's "Monitoring requirements" heading answers most of these.</p>
<div class="tbl"><table>
<thead><tr><th>Drug</th><th>Monitor</th><th>Timing / target</th></tr></thead>
<tbody>
<tr><td>Lithium</td><td>Level; U&amp;E, TFT, Ca²⁺, weight</td><td>12 h post-dose; 0.4–1.0 mmol/L. Weekly after change, then 3-monthly. U&amp;E/TFT 6-monthly</td></tr>
<tr><td>Digoxin</td><td>Level only if toxicity / adherence; K⁺; HR</td><td>≥6 h post-dose</td></tr>
<tr><td>Gentamicin (once daily)</td><td>Level, creatinine</td><td>6–14 h after start of infusion (Hartford), or trough &lt;1 mg/L per local policy</td></tr>
<tr><td>Vancomycin</td><td>Trough level, creatinine</td><td>Before 3rd/4th dose; 10–20 mg/L (15–20 serious)</td></tr>
<tr><td>Phenytoin</td><td>Level (adjust for low albumin)</td><td>10–20 mg/L; trough</td></tr>
<tr><td>Warfarin</td><td>INR</td><td>2.5 for AF / first VTE; 3.5 recurrent VTE on warfarin</td></tr>
<tr><td>Unfractionated heparin (IV)</td><td>APTT ratio; platelets</td><td>6 h after start/change; platelets for HIT</td></tr>
<tr><td>LMWH (treatment)</td><td>Platelets; anti-Xa in renal impairment/pregnancy/extremes of weight</td><td></td></tr>
<tr><td>ACEi / ARB / spironolactone</td><td>U&amp;E</td><td>Baseline, 1–2 weeks after start and each dose rise</td></tr>
<tr><td>Statins</td><td>ALT; lipids</td><td>Baseline, 3 months, 12 months; lipids at 3 months</td></tr>
<tr><td>Amiodarone</td><td>TFT, LFT (CXR baseline)</td><td>Every 6 months</td></tr>
<tr><td>Methotrexate</td><td>FBC, U&amp;E, LFT</td><td>1–2 weekly until stable, then 2–3 monthly</td></tr>
<tr><td>Azathioprine</td><td>TPMT before; FBC, LFT</td><td>Weekly for first 4 weeks, then less often</td></tr>
<tr><td>Clozapine</td><td>FBC</td><td>Weekly 18 weeks, fortnightly to 1 year, then monthly</td></tr>
<tr><td>Carbimazole</td><td>TFT; FBC if sore throat</td><td></td></tr>
<tr><td>Levothyroxine</td><td>TSH</td><td>After any dose change, until stable</td></tr>
<tr><td>Insulin / sulfonylureas</td><td>Capillary glucose, HbA1c</td><td></td></tr>
</tbody></table></div>
<p class="note">Efficacy markers: BP for antihypertensives, <b>daily weight</b> for diuretics in heart failure, peak flow for asthma, HbA1c for diabetes, INR for warfarin, heart rate for rate control, symptom/seizure frequency for most others.</p>
`,
    recap: [
      { q: "1% lidocaine contains how many mg per mL?", a: "10 mg/mL (1 g per 100 mL)." },
      { q: "1 in 1,000 adrenaline = ? mg/mL", a: "1 mg/mL." },
      { q: "Drops per minute formula?", a: "(Volume mL × drops/mL) ÷ minutes. Standard set 20 drops/mL." },
      { q: "Breakthrough opioid dose?", a: "One-sixth of the total 24-hour regular dose." },
      { q: "Oral morphine → SC morphine?", a: "Divide by 2." },
      { q: "Which drug interacts with clarithromycin and must be withheld?", a: "Simvastatin (also atorvastatin at high doses): rhabdomyolysis risk." }
    ],
    practice: ["A1", "A2", "A3", "A4", "A5", "A6", "M1", "M2", "M3", "M4", "M5", "M6", "R8", "C9"]
  },
  {
    n: 5,
    title: "Planning & Providing Information",
    focus: ["planning", "info"],
    weight: "28 of 200 marks",
    lesson: `
<h3>Planning Management: choose the best plan</h3>
<p>These items give a clinical scenario and 5–8 plausible options. Usually more than one option is defensible, and the marks go to the <b>guideline-preferred</b> one. Think "what would NICE or the BNF treatment summary say first?"</p>

<h3>First-line choices to have memorised</h3>
<div class="tbl"><table>
<thead><tr><th>Condition</th><th>First line</th></tr></thead>
<tbody>
<tr><td>Hypertension, &lt;55 and not Black African/Caribbean</td><td>ACE inhibitor (or ARB)</td></tr>
<tr><td>Hypertension, ≥55 or Black African/Caribbean</td><td>Calcium-channel blocker (amlodipine)</td></tr>
<tr><td>Hypertension step 2 → 3 → 4</td><td>A + C → A + C + D (thiazide-like) → add spironolactone (if K⁺ ≤4.5) or alpha/beta-blocker</td></tr>
<tr><td>Type 2 diabetes</td><td>Metformin; add SGLT2i if HF / CVD / high CV risk</td></tr>
<tr><td>DVT / PE</td><td>DOAC (apixaban or rivaroxaban), ≥3 months</td></tr>
<tr><td>AF stroke prevention (CHA₂DS₂-VASc ≥2)</td><td>DOAC</td></tr>
<tr><td>Secondary prevention after MI</td><td>Aspirin + P2Y12 (12 months), ACEi, beta-blocker, atorvastatin 80 mg</td></tr>
<tr><td>Primary prevention (QRISK ≥10%)</td><td>Atorvastatin 20 mg</td></tr>
<tr><td>C. difficile, first episode</td><td>Oral vancomycin 125 mg QDS 10 days</td></tr>
<tr><td>Neutropenic sepsis</td><td>IV piperacillin/tazobactam within 1 hour</td></tr>
<tr><td>Status epilepticus</td><td>Lorazepam 4 mg IV (no access: buccal midazolam 10 mg)</td></tr>
<tr><td>Paracetamol overdose, staggered or unknown time</td><td>Start acetylcysteine immediately</td></tr>
<tr><td>Long-term steroids, age ≥65</td><td>Bisphosphonate + calcium/vitamin D</td></tr>
<tr><td>Warfarin with major bleeding</td><td>Stop; vitamin K 5 mg IV + prothrombin complex concentrate</td></tr>
<tr><td>Heart failure (reduced EF)</td><td>ACEi + beta-blocker; then MRA; SGLT2i; loop diuretic for symptoms</td></tr>
<tr><td>Asthma (adults, new)</td><td>Low-dose ICS/formoterol as needed (AIR), or MART</td></tr>
<tr><td>COPD exacerbation</td><td>Prednisolone 30 mg for 5 days ± antibiotic (amoxicillin/doxycycline/clarithromycin)</td></tr>
</tbody></table></div>

<h3>Sick day rules (SADMANS)</h3>
<p>When a patient is dehydrated (vomiting, diarrhoea, fever), temporarily stop: <b>S</b>ulfonylureas, <b>A</b>CE inhibitors, <b>D</b>iuretics, <b>M</b>etformin, <b>A</b>RBs, <b>N</b>SAIDs, <b>S</b>GLT2 inhibitors. Restart after 24–48 hours of normal eating and drinking. Steroid sick day rules are the opposite: do <b>not</b> stop; the dose may need increasing.</p>

<h3>Peri-operative planning</h3>
<ul>
<li>Warfarin: stop 5 days before; bridge with LMWH if high thrombotic risk.</li>
<li>DOACs: stop 24–48 h+ before depending on bleeding risk and renal function.</li>
<li>Clopidogrel: stop 7 days before (if safe). Aspirin: usually continued.</li>
<li>COC/HRT: stop 4 weeks before major surgery.</li>
<li>Metformin, SGLT2 inhibitors: omit on the day / SGLT2i the day before; insulin: reduce basal dose and use a variable-rate insulin infusion if a long fast is expected.</li>
<li>Steroids: continue and give extra peri-operative cover.</li>
</ul>

<h3>Providing Information: pick the most important statement</h3>
<p>Choose the statement that is <b>accurate</b> and <b>most safety-critical</b> for <b>this patient</b>. The BNF "Patient and carer advice" heading is the source. A reliable structure is:</p>
<ol class="steps">
<li>What it's for and how to take it (timing, food, how long)</li>
<li>Serious side effects to report</li>
<li>Interactions, including OTC and alcohol</li>
<li>Monitoring needed</li>
<li>What to do if a dose is missed or they become unwell</li>
</ol>
<div class="tbl"><table>
<thead><tr><th>Drug</th><th>Key counselling point</th></tr></thead>
<tbody>
<tr><td>Alendronic acid</td><td>Empty stomach, full glass of plain water, 30 min before food, stay upright 30 min</td></tr>
<tr><td>Levothyroxine</td><td>Empty stomach before breakfast; separate from iron/calcium by 4 h</td></tr>
<tr><td>Warfarin</td><td>Check before any new medicine/herbal; consistent diet; avoid binge alcohol and cranberry; yellow book; report bleeding</td></tr>
<tr><td>DOACs</td><td>Don't miss doses (short half-life); report bleeding; carry alert card</td></tr>
<tr><td>Steroids (long-term)</td><td>Don't stop suddenly; steroid card; take in the morning with food</td></tr>
<tr><td>Methotrexate</td><td>Once WEEKLY; report sore throat/fever/bruising/ulcers/breathlessness; folic acid on another day; no trimethoprim</td></tr>
<tr><td>Lithium</td><td>Keep hydrated; avoid NSAIDs; same brand; toxicity signs; regular levels</td></tr>
<tr><td>Inhaled corticosteroid</td><td>Use regularly; rinse mouth after</td></tr>
<tr><td>GTN spray</td><td>Sit down; repeat after 5 min; 999 if pain continues 5 min after 2nd dose; headache common</td></tr>
<tr><td>Rifampicin</td><td>Orange body fluids, stains lenses; COC ineffective</td></tr>
<tr><td>Metronidazole</td><td>No alcohol during and for 48 h after</td></tr>
<tr><td>Combined pill</td><td>1 missed pill: take ASAP, carry on; 2+ missed: condoms 7 days ± EC</td></tr>
<tr><td>Carbimazole / clozapine</td><td>Report sore throat or fever immediately</td></tr>
<tr><td>Statins</td><td>Report unexplained muscle pain; avoid large amounts of grapefruit (simvastatin)</td></tr>
<tr><td>Metformin</td><td>Take with meals; GI upset usually settles; stop if vomiting or dehydrated</td></tr>
<tr><td>Valproate</td><td>Pregnancy Prevention Programme; highly effective contraception</td></tr>
</tbody></table></div>
`,
    recap: [
      { q: "Which drug causes a dry cough, and what do you switch to?", a: "ACE inhibitor → switch to an ARB (e.g. losartan)." },
      { q: "When must a statin be stopped?", a: "Muscle symptoms with CK >10× upper limit of normal." },
      { q: "Treatment of metoclopramide-induced acute dystonia?", a: "Procyclidine IV/IM." },
      { q: "When to take a lithium level, and target?", a: "12 hours post-dose; 0.4–1.0 mmol/L." },
      { q: "Which reactions get a Yellow Card for an established drug?", a: "Serious reactions. For ▼ drugs and children: all reactions." },
      { q: "Clozapine FBC schedule?", a: "Weekly for 18 weeks, fortnightly to 1 year, then monthly." },
      { q: "Monitoring after starting an ACE inhibitor?", a: "U&E before, then 1–2 weeks after starting and after each dose increase." }
    ],
    practice: ["PM1", "PM2", "PM3", "PM4", "PM5", "PM6", "I1", "I2", "I3", "I4", "I5", "P12", "A7", "M7"]
  },
  {
    n: 6,
    title: "Data Interpretation & Full Recap",
    focus: ["data"],
    weight: "12 of 200 marks",
    lesson: `
<h3>Data Interpretation: read the number, then act</h3>
<p>You get a result (INR, drug level, U&amp;E, TFTs, glucose chart) and choose the most appropriate change. Work through it in this order: <b>Is it abnormal? → Is the patient harmed or symptomatic? → What does the guideline threshold say? → What's the least drastic safe action?</b></p>

<h3>Warfarin and a high INR (BNF)</h3>
<div class="tbl"><table>
<thead><tr><th>Situation</th><th>Action</th></tr></thead>
<tbody>
<tr><td>Major bleeding (any INR)</td><td>Stop warfarin; vitamin K 5 mg slow IV + prothrombin complex concentrate</td></tr>
<tr><td>INR &gt;8, minor bleeding</td><td>Stop; vitamin K 1–3 mg IV; repeat if INR still high after 24 h; restart when INR &lt;5</td></tr>
<tr><td>INR &gt;8, no bleeding</td><td>Stop; oral vitamin K 1–5 mg; repeat if still high after 24 h; restart when INR &lt;5</td></tr>
<tr><td>INR 5–8, minor bleeding</td><td>Stop; vitamin K 1–3 mg IV; restart when INR &lt;5</td></tr>
<tr><td>INR 5–8, no bleeding</td><td>Withhold 1–2 doses; reduce maintenance dose</td></tr>
<tr><td>INR above target but &lt;5</td><td>Reduce dose or omit one dose; find the cause</td></tr>
</tbody></table></div>

<h3>Renal and electrolyte thresholds</h3>
<ul>
<li>After starting ACEi/ARB: creatinine rise <b>&lt;30%</b> (eGFR fall &lt;25%) is acceptable, so continue. Larger rise → stop or reduce and investigate.</li>
<li>Potassium on ACEi/ARB: <b>&gt;6.0 mmol/L → stop</b>. 5.0–6.0 → don't increase; review other K⁺-raising drugs.</li>
<li>Spironolactone in HF: K⁺ &gt;5.5 → halve dose; &gt;6.0 → stop.</li>
<li>eGFR thresholds: metformin review at &lt;45, stop at &lt;30; nitrofurantoin avoid &lt;45; enoxaparin prophylaxis 20 mg if CrCl &lt;30.</li>
<li>Many renal dose adjustments in the BNF use <b>creatinine clearance (Cockcroft–Gault)</b>, not eGFR, especially for DOACs and drugs with a narrow therapeutic index.</li>
</ul>

<h3>Drug levels</h3>
<div class="tbl"><table>
<thead><tr><th>Result</th><th>Action</th></tr></thead>
<tbody>
<tr><td>Gentamicin level on Hartford nomogram</td><td>Area sets interval: 24, 36 or 48 h. Above 48 h line → stop, re-level</td></tr>
<tr><td>Vancomycin trough high</td><td>Withhold, re-level, reduce dose or extend interval</td></tr>
<tr><td>Vancomycin trough low</td><td>Increase dose or shorten interval</td></tr>
<tr><td>Digoxin high + symptoms</td><td>Withhold; correct K⁺; ECG; Digibind if life-threatening</td></tr>
<tr><td>Lithium &gt;1.0 with symptoms</td><td>Withhold, U&amp;E, hydrate, repeat level; find the cause</td></tr>
<tr><td>Phenytoin with low albumin</td><td>Total level underestimates free drug. Interpret with caution</td></tr>
</tbody></table></div>

<h3>Thyroid and diabetes patterns</h3>
<ul>
<li>On levothyroxine: <b>TSH high → increase</b> by 25–50 micrograms; <b>TSH suppressed → reduce</b>. Recheck after a dose change.</li>
<li>Basal-bolus insulin: change the insulin that acts <b>just before</b> the abnormal reading. High fasting → basal (night). High pre-lunch → breakfast bolus. High pre-dinner → lunch bolus. High bedtime → evening meal bolus.</li>
<li>Recurrent hypos at one time point → reduce the insulin acting then. Change one dose at a time, by about 10–20%.</li>
</ul>
`,
    recap: [
      { q: "Hypertension first line in a 48-year-old White man?", a: "ACE inhibitor (e.g. ramipril)." },
      { q: "First line for C. difficile (first episode)?", a: "Oral vancomycin 125 mg four times daily for 10 days." },
      { q: "What does SADMANS stand for?", a: "Sulfonylureas, ACEi, Diuretics, Metformin, ARBs, NSAIDs, SGLT2i: stop temporarily when dehydrated." },
      { q: "Alendronic acid counselling?", a: "Empty stomach, full glass of plain water, 30 min before food, stay upright 30 min." },
      { q: "Key methotrexate safety advice?", a: "Once WEEKLY; report sore throat, fever, bruising, mouth ulcers or breathlessness." },
      { q: "Status epilepticus with IV access?", a: "Lorazepam 4 mg IV, repeat once after 5–10 minutes." },
      { q: "Max paracetamol for a 44 kg adult?", a: "15 mg/kg per dose, max 60 mg/kg/day (here ~660 mg per dose, 2.6 g/day)." },
      { q: "Calcium gluconate in hyperkalaemia does what?", a: "Stabilises the myocardium. It does not lower potassium." }
    ],
    practice: ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "R9", "R10", "C10", "A8", "M8", "PM7", "I6", "P13", "P14"]
  },
  {
    n: 7,
    title: "Full Mock Exam",
    focus: [],
    weight: "200 marks",
    mock: true,
    lesson: `
<h3>Today you sit a full-length mock</h3>
<p>60 items, all eight sections in the real order, 2-hour timer. No feedback until you submit, the same as the real exam. Then review every item you dropped marks on.</p>
<h3>Rules for the mock</h3>
<ul>
<li>Sit it in one go, somewhere quiet. Keep the <a href="https://bnf.nice.org.uk/" target="_blank" rel="noopener">BNF</a> open in another tab, just as you will in the exam.</li>
<li>Stick to the time budget: about 4½ minutes per prescribing item, 2½ per review item, 1–2 minutes for everything else.</li>
<li>Flag anything you're unsure of and move on. Come back at the end.</li>
<li>Never leave a blank. There's no negative marking.</li>
</ul>
<h3>After the mock</h3>
<ol class="steps">
<li>Look at your section breakdown. Any section under 75% becomes your focus in the Drills tab.</li>
<li>Read the explanation for every item where you lost marks, then re-read that day's lesson.</li>
<li>Sit a new mock about once a week until exam day. Each one draws a fresh random mix of items from the bank.</li>
</ol>
`,
    recap: [
      { q: "INR 5–8, no bleeding?", a: "Withhold 1–2 doses of warfarin and reduce the maintenance dose." },
      { q: "INR >8, no bleeding?", a: "Stop warfarin; oral vitamin K 1–5 mg; restart when INR <5." },
      { q: "Acceptable creatinine rise after starting an ACE inhibitor?", a: "Up to 30% (eGFR fall <25%). Potassium >6.0 → stop." },
      { q: "High pre-evening-meal glucose on basal-bolus: change which dose?", a: "The lunchtime rapid-acting insulin." },
      { q: "TSH high on levothyroxine?", a: "Increase by 25–50 micrograms, recheck after the change." },
      { q: "Gentamicin level falls in Q36h area?", a: "Give the next dose 36 hours after the last one." },
      { q: "Prescribing marks split?", a: "Drug choice plus dose, route and frequency. Wrong drug scores zero." },
      { q: "Weekly drugs often written as daily?", a: "Methotrexate and alendronic acid 70 mg." }
    ],
    practice: []
  }
];
