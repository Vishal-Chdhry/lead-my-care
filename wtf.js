const xmlSample = `<?xml version="1.0" encoding="utf-8"?>
<feed xml:base="https://medlineplus.gov/" xml:lang="en" xmlns="http://www.w3.org/2005/Atom" xmlns:xsi="http://www .w3.org/2001/XMLSchema-instance"><title type="text">MedlinePlus Connect</title><updated>2023-03-16T11:18:36Z</updated><id></id>< author><name>US National Library of Medicine</name><uri>https://www.nlm.nih.gov</uri></author><subtitle type="text">MedlinePlus Connect results for ICD- 9-CM 250.33</subtitle><category scheme="mainSearchCriteria.vc" term="250.33"></category><category scheme="mainSearchCriteria.v.cs" term="ICD9CM"></category><category scheme="mainSearchCriteria.v.dn" term="Diabetes mellitus with other coma type 1 uncontrolled"></category><category scheme="informationRecipient" term="PAT"></category><entry><title>Coma</title><link href="https:/ /medlineplus.gov/spanish/coma.html?utm_source=mplusconnect&utm_medium=service" rel="alternate"></link><id>tag: medlineplus.gov, 2023-16-03:/spanish/coma.html ?utm_source=mplusconnect&utm_medium=application</id><summary type="html">rel="alternate"></link><id>tag: medlineplus.gov, 2023-16-03:/spanish/coma.html?utm_source=mplusconnect&utm_medium=application</id><summary type="html" >rel="alternate"></link><id>tag: medlineplus.gov, 2023-16-03:/spanish/coma.html?utm_source=mplusconnect&utm_medium=application</id><summary type="html" >
<p>A coma is a deep state of unconsciousness. A person in a coma is alive but unable to move or respond to their surroundings. Coma can occur as a complication of underlying disease or as a result of injuries, such as <a href="https://medlineplus.gov/traumaticbraininjury.html?utm_source=mplusconnect">head trauma< /a>. </p>

<p>Coma rarely lasts more than 2 to 4 weeks. The outcome depends on the cause, severity, and site of the injury. People can come out of a coma with physical, intellectual and psychological problems. Some people can remain in a coma for years or even decades. For these people, the most common cause of death is an infection, such as pneumonia. </p>

<p class="NLMattribution"> NIH: National Institute of Neurological Disorders and Stroke</p>

</summary><updated>2023-03-16T11:18:36Z</updated></entry><entry><title>Type 1 diabetes</title><link href="https://medlineplus.gov/ spanish/diabetestype1.html?utm_source=mplusconnect&utm_medium=service" rel="alternate"></link><id>tag: medlineplus.gov, 2023-16-03:/spanish/diabetestype1.html?utm_source=mplusconnect& utm_medium=application</id><summary type="html">
<p>The <a href="https://medlineplus.gov/diabetes.html?utm_source=mplusconnect">diabetes</a> indicates that the level of glucose, or <a href="https://medlineplus.gov/bloodsugar.html?utm_source=mplusconnect">sugar</a>, is too high in the blood. In type 1 diabetes, the pancreas does not produce insulin. Insulin is a hormone that helps glucose get into cells to supply them with energy. Without insulin, there is excess glucose that remains in the blood. Over time, high blood glucose levels can cause <a href="https://medlineplus.gov/diabetescomplications.html?utm_source=mplusconnect">serious problems</a> at <a href="https://medlineplus.
<p>Type 1 diabetes occurs most often in <a href="https://medlineplus.gov/diabetesinchildrenandteens.html?utm_source=mplusconnect">children</a> and young adults, but it can appear at any age. Symptoms may include:</p>
<ul>
<li>Very thirsty</li>
<li>Frequent urination</li>
<li>Feeling very hungry or tired</li>
<li>Weight loss for no apparent reason</li>
<li>Presence of sores that are slow to heal</li>
<li>Dry and itchy skin</li>
<li>Loss of sensation or tingling in feet</li>
<li>Blurred vision</li>
</ul>
<p>A blood test can show if you have diabetes. If so, you will need to take <a href="https://medlineplus.gov/diabetesmedicines.html?utm_source=mplusconnect">insulin</a> the rest of his life. A blood test called <a href="https://medlineplus.gov/a1c.html?utm_source=mplusconnect">A1c</a> you can check how you are managing your diabetes.</p>
<p class="NLMattribution"> NIH: National Institute of Diabetes and Digestive and Kidney Diseases</p>
</summary><updated>2023-03-16T11:18:36Z</updated></entry></feed>`;
console.log(parseXmlToJson(xmlSample));

function parseXmlToJson(xml) {
    const json = {};
    for (const res of xml.matchAll(/(?:<(\w*)(?:\s[^>]*)*>)((?:(?!<\1).)*)(?:<\/\1>)|<(\w*)(?:\s*)*\/>/gm)) {
        const key = res[1] || res[3];
        const value = res[2] && parseXmlToJson(res[2]);
        json[key] = ((value && Object.keys(value).length) ? value : res[2]) || null;

    }
    return json;
}