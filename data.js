// Kimya Sınav Çalışma Verileri - 12. Sınıf Elektrokimya
const examData = {
    topics: [
        {
            id: 'topic1',
            title: 'Galvanik Piller (Voltaik Piller)',
            icon: '🔋',
            content: `
                <div class="topic-card">
                    <h3 class="text-2xl font-bold mb-4 text-purple-600">🔋 Galvanik Pil Nedir?</h3>
                    <p class="mb-4">Galvanik piller, <strong>redoks tepkimelerinden</strong> elektrik enerjisi elde eden elektrokimyasal hücrelerdir.</p>
                    
                    <div class="key-point mb-4">
                        <h4 class="font-bold text-lg mb-2">⚡ Temel Özellikler:</h4>
                        <ul class="list-disc list-inside space-y-2">
                            <li><strong>İstemli tepkime:</strong> ΔG < 0</li>
                            <li><strong>E°<sub>hücre</sub> > 0:</strong> Pozitif potansiyel</li>
                            <li><strong>İki elektrot:</strong> Anot ve Katot</li>
                            <li><strong>Tuz köprüsü:</strong> İyon akışı</li>
                        </ul>
                    </div>
                </div>

                <div class="topic-card">
                    <h3 class="text-2xl font-bold mb-4 text-purple-600">🎯 ANOT ve KATOT NASIL BELİRLENİR?</h3>
                    
                    <div class="key-point mb-6">
                        <h4 class="font-bold text-lg mb-3">📌 Temel Mantık:</h4>
                        <p class="mb-2">Galvanik pilde elektrotları belirlemek için <strong>E° (standart indirgenme potansiyeli)</strong> değerlerini kullanırız.</p>
                        <p class="text-lg font-bold mt-3">🔑 Altın Kural: E° büyük olan KATOT, küçük olan ANOT'tur!</p>
                    </div>

                    <div class="example-box mb-6">
                        <h4 class="font-bold text-xl mb-4">📝 ADIM ADIM BELİRLEME:</h4>
                        
                        <div class="space-y-4">
                            <div class="p-4 rounded-lg border-2" style="background: var(--bg-tertiary); border-color: var(--border-color);">
                                <p class="font-bold text-lg mb-2" style="color: var(--text-primary);">1️⃣ E° Değerlerini Karşılaştır</p>
                                <p>İki elektrotun standart indirgenme potansiyellerini tabloda bul ve karşılaştır.</p>
                                <p class="mt-2 font-mono text-sm">Örnek: E°(Cu²⁺/Cu) = +0.34 V, E°(Zn²⁺/Zn) = -0.76 V</p>
                            </div>

                            <div class="p-4 rounded-lg border-2" style="background: var(--bg-tertiary); border-color: var(--border-color);">
                                <p class="font-bold text-lg mb-2" style="color: var(--text-primary);">2️⃣ Büyük E° → KATOT (Pozitif Elektrot)</p>
                                <p><strong>Neden?</strong> E° büyük olan elektron alma eğilimi yüksektir, yani indirgenmesi kolaydır.</p>
                                <p class="mt-2 font-mono text-sm bg-blue-50 dark:bg-blue-950 p-2 rounded">Cu daha büyük (+0.34 > -0.76) → Cu KATOT olur</p>
                                <p class="mt-2"><strong>Katotta olan:</strong> İndirgenme → Cu²⁺ + 2e⁻ → Cu</p>
                            </div>

                            <div class="p-4 rounded-lg border-2" style="background: var(--bg-tertiary); border-color: var(--border-color);">
                                <p class="font-bold text-lg mb-2" style="color: var(--text-primary);">3️⃣ Küçük E° → ANOT (Negatif Elektrot)</p>
                                <p><strong>Neden?</strong> E° küçük olan elektron verme eğilimi yüksektir, yani yükseltgenmesi kolaydır.</p>
                                <p class="mt-2 font-mono text-sm bg-red-50 dark:bg-red-950 p-2 rounded">Zn daha küçük (-0.76 < +0.34) → Zn ANOT olur</p>
                                <p class="mt-2"><strong>Anotta olan:</strong> Yükseltgenme → Zn → Zn²⁺ + 2e⁻</p>
                            </div>

                            <div class="p-4 rounded-lg border-2 border-green-500 bg-green-50 dark:bg-green-950">
                                <p class="font-bold text-lg mb-2 text-green-800 dark:text-green-400">✅ Sonuç:</p>
                                <p class="text-green-900 dark:text-green-300"><strong>KATOT:</strong> Cu elektrotu (+) - İndirgenir</p>
                                <p class="text-green-900 dark:text-green-300"><strong>ANOT:</strong> Zn elektrotu (-) - Yükseltgenir</p>
                                <p class="mt-2 font-mono text-sm text-green-900 dark:text-green-300">Pil Notasyonu: Zn | Zn²⁺ || Cu²⁺ | Cu</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg border-l-4 border-yellow-500 mb-6">
                        <p class="font-bold text-lg mb-2">⚠️ Dikkat Et!</p>
                        <ul class="space-y-2">
                            <li>• <strong>Tablodaki değerler indirgenme için!</strong> Oksidasyonu için işareti ters çevirirsin.</li>
                            <li>• <strong>Negatif sayılarda büyüklük:</strong> -0.13 > -0.76 (çünkü -0.13 sıfıra daha yakın)</li>
                            <li>• <strong>Metal çözünür = ANOT,</strong> metal birikir = KATOT</li>
                        </ul>
                    </div>

                    <h3 class="text-2xl font-bold mb-4 text-purple-600 mt-8">⊖ ANOT vs ⊕ KATOT</h3>
                    <div class="grid md:grid-cols-2 gap-4 mb-4">
                        <div class="bg-red-50 dark:bg-red-950 p-4 rounded-lg border-2 border-red-300 dark:border-red-800">
                            <h4 class="font-bold text-xl mb-3 text-red-700 dark:text-red-400">⊖ ANOT (-)</h4>
                            <ul class="space-y-2 text-sm md:text-base">
                                <li>• <strong>Oksidasyonun</strong> olduğu yer</li>
                                <li>• Elektron <strong>verir</strong></li>
                                <li>• Metal <strong>çözünür</strong></li>
                                <li>• E° değeri <strong>küçük</strong></li>
                            </ul>
                            <div class="mt-3 p-3 rounded" style="background: var(--bg-tertiary);">
                                <p class="font-mono text-sm">Zn → Zn<sup>2+</sup> + 2e<sup>-</sup></p>
                            </div>
                        </div>
                        
                        <div class="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border-2 border-blue-300 dark:border-blue-800">
                            <h4 class="font-bold text-xl mb-3 text-blue-700 dark:text-blue-400">⊕ KATOT (+)</h4>
                            <ul class="space-y-2 text-sm md:text-base">
                                <li>• <strong>İndirgenmenin</strong> olduğu yer</li>
                                <li>• Elektron <strong>alır</strong></li>
                                <li>• Metal <strong>birikir</strong></li>
                                <li>• E° değeri <strong>büyük</strong></li>
                            </ul>
                            <div class="mt-3 p-3 rounded" style="background: var(--bg-tertiary);">
                                <p class="font-mono text-sm">Cu<sup>2+</sup> + 2e<sup>-</sup> → Cu</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="topic-card">
                    <h3 class="text-2xl font-bold mb-4 text-purple-600">📝 Pil Şeması (Notasyonu)</h3>
                    <div class="formula text-xl text-center my-4">
                        Anot | Anot İyonu || Katot İyonu | Katot
                    </div>
                    
                    <div class="example-box">
                        <h4 class="font-bold text-lg mb-3">Örnek: Daniell Pili (Zn-Cu)</h4>
                        <div class="formula text-lg mb-3">
                            Zn(k) | Zn<sup>2+</sup>(suda) || Cu<sup>2+</sup>(suda) | Cu(k)
                        </div>
                        <p><strong>Anot:</strong> Zn → Zn<sup>2+</sup> + 2e<sup>-</sup></p>
                        <p><strong>Katot:</strong> Cu<sup>2+</sup> + 2e<sup>-</sup> → Cu</p>
                        <p class="mt-2"><strong>Net:</strong> Zn + Cu<sup>2+</sup> → Zn<sup>2+</sup> + Cu</p>
                    </div>
                    
                    <div class="bg-yellow-50 p-4 rounded-lg mt-4">
                        <p class="font-semibold">⚠️ Notlar:</p>
                        <ul class="list-disc list-inside mt-2">
                            <li>| → Faz sınırı</li>
                            <li>|| → Tuz köprüsü</li>
                            <li>Anot solda, katot sağda</li>
                        </ul>
                    </div>
                </div>

                <div class="topic-card">
                    <h3 class="text-2xl font-bold mb-4 text-purple-600">🧮 Net Tepkime Yazma</h3>
                    <div class="space-y-3">
                        <div class="p-3 rounded border" style="background: var(--bg-tertiary); border-color: var(--border-color);">
                            <p class="font-bold">1.</p> Yarı tepkimeleri belirle
                        </div>
                        <div class="p-3 rounded border" style="background: var(--bg-tertiary); border-color: var(--border-color);">
                            <p class="font-bold">2.</p> Elektron sayılarını eşitle
                        </div>
                        <div class="p-3 rounded border" style="background: var(--bg-tertiary); border-color: var(--border-color);">
                            <p class="font-bold">3.</p> Tepkimeleri topla ve sadeleştir
                        </div>
                    </div>
                    
                    <div class="example-box mt-4">
                        <h4 class="font-bold">Örnek: Al-Ag Pili</h4>
                        <p>Al → Al<sup>3+</sup> + 3e<sup>-</sup> (×1)</p>
                        <p>Ag<sup>+</sup> + e<sup>-</sup> → Ag (×3)</p>
                        <hr class="my-2">
                        <p class="font-bold text-green-600">Net: Al + 3Ag<sup>+</sup> → Al<sup>3+</sup> + 3Ag</p>
                    </div>
                </div>
            `
        },
        {
            id: 'topic2',
            title: 'Redoks Denkleştirme',
            icon: '⚖️',
            content: `
                <div class="topic-card">
                    <h3 class="text-2xl font-bold mb-4 text-purple-600">⚖️ Redoks Tepkimeleri</h3>
                    <div class="grid md:grid-cols-2 gap-4 mb-4">
                        <div class="bg-orange-50 dark:bg-orange-950 p-4 rounded-lg border-2 border-orange-300 dark:border-orange-800">
                            <h4 class="font-bold text-xl mb-3 dark:text-orange-400">🔺 OKSİDASYON</h4>
                            <ul class="space-y-2 text-sm md:text-base">
                                <li>• <strong>Elektron kaybı</strong></li>
                                <li>• YB artar (+2 → +3)</li>
                                <li>• İndirgen ajan</li>
                            </ul>
                            <p class="font-mono mt-3 text-sm">Fe<sup>2+</sup> → Fe<sup>3+</sup> + e<sup>-</sup></p>
                        </div>
                        
                        <div class="bg-green-50 dark:bg-green-950 p-4 rounded-lg border-2 border-green-300 dark:border-green-800">
                            <h4 class="font-bold text-xl mb-3 dark:text-green-400">🔻 İNDİRGENME</h4>
                            <ul class="space-y-2 text-sm md:text-base">
                                <li>• <strong>Elektron kazanımı</strong></li>
                                <li>• YB azalır (+2 → 0)</li>
                                <li>• Yükseltgen ajan</li>
                            </ul>
                            <p class="font-mono mt-3 text-sm">Cu<sup>2+</sup> + 2e<sup>-</sup> → Cu</p>
                        </div>
                    </div>
                    
                    <div class="key-point">
                        <p class="font-bold">🎯 Hatırla:</p>
                        <p><strong>OIL RIG</strong> - Oxidation Is Loss, Reduction Is Gain</p>
                    </div>
                </div>

                <div class="topic-card">
                    <h3 class="text-2xl font-bold mb-4 text-purple-600">📋 REDOKS DENKLEŞTİRME - ASİTLİ ORTAM (DETAYLI)</h3>
                    
                    <div class="key-point mb-6">
                        <h4 class="font-bold text-lg mb-3">🎯 Neden Yarı Tepkime Yöntemi?</h4>
                        <p>Redoks tepkimelerinde hem <strong>kütle</strong> hem de <strong>yük dengesini</strong> sağlamak gerekir. Yarı tepkime yöntemi her iki dengeyi de garanti eder!</p>
                    </div>

                    <div class="example-box mb-6">
                        <h4 class="font-bold text-xl mb-4">📝 7 ADIMDA DENKLEŞTİRME:</h4>
                        <p class="mb-4 text-lg"><strong>Örnek:</strong> MnO₄⁻ + Fe²⁺ → Mn²⁺ + Fe³⁺ (Asitli ortam)</p>
                        
                        <div class="space-y-4">
                            <div class="p-4 rounded-lg border-2" style="background: var(--bg-tertiary); border-color: var(--border-color);">
                                <p class="font-bold text-lg mb-2" style="color: var(--text-primary);">ADIM 1️⃣: Yarı Tepkimeleri Ayır</p>
                                <p class="mb-2">Hangi element yükseltgeniyor, hangisi indirgeniyor belirle:</p>
                                <div class="space-y-2 mt-3">
                                    <div class="bg-green-50 dark:bg-green-950 p-2 rounded">
                                        <p><strong>İndirgenme:</strong> MnO₄⁻ → Mn²⁺</p>
                                        <p class="text-sm">(Mn +7'den +2'ye düşüyor)</p>
                                    </div>
                                    <div class="bg-orange-50 dark:bg-orange-950 p-2 rounded">
                                        <p><strong>Yükseltgenme:</strong> Fe²⁺ → Fe³⁺</p>
                                        <p class="text-sm">(Fe +2'den +3'e çıkıyor)</p>
                                    </div>
                                </div>
                            </div>

                            <div class="p-4 rounded-lg border-2" style="background: var(--bg-tertiary); border-color: var(--border-color);">
                                <p class="font-bold text-lg mb-2" style="color: var(--text-primary);">ADIM 2️⃣: O ve H Dışındaki Atomları Dengele</p>
                                <p class="mb-2">Mn ve Fe zaten dengeli (her tarafta 1 tane):</p>
                                <div class="font-mono text-sm bg-gray-50 dark:bg-gray-800 p-2 rounded">
                                    <p>MnO₄⁻ → Mn²⁺  ✓</p>
                                    <p>Fe²⁺ → Fe³⁺  ✓</p>
                                </div>
                            </div>

                            <div class="p-4 rounded-lg border-2" style="background: var(--bg-tertiary); border-color: var(--border-color);">
                                <p class="font-bold text-lg mb-2" style="color: var(--text-primary);">ADIM 3️⃣: Oksijen (O) Atomlarını Dengele</p>
                                <p class="mb-2"><strong>Kural:</strong> Eksik taraf var eksik tarafa H₂O ekle!</p>
                                <div class="space-y-2 mt-3">
                                    <div class="bg-blue-50 dark:bg-blue-950 p-3 rounded">
                                        <p class="mb-1"><strong>İndirgenme:</strong></p>
                                        <p class="text-sm">Solda 4 O var, sağda 0 O var → Sağa 4H₂O ekle</p>
                                        <p class="font-mono text-sm mt-2">MnO₄⁻ → Mn²⁺ + 4H₂O</p>
                                    </div>
                                    <div class="bg-blue-50 dark:bg-blue-950 p-3 rounded">
                                        <p class="mb-1"><strong>Yükseltgenme:</strong></p>
                                        <p class="text-sm">Oksijen yok, değişiklik yok</p>
                                        <p class="font-mono text-sm mt-2">Fe²⁺ → Fe³⁺</p>
                                    </div>
                                </div>
                            </div>

                            <div class="p-4 rounded-lg border-2" style="background: var(--bg-tertiary); border-color: var(--border-color);">
                                <p class="font-bold text-lg mb-2" style="color: var(--text-primary);">ADIM 4️⃣: Hidrojen (H) Atomlarını Dengele</p>
                                <p class="mb-2"><strong>Kural:</strong> Eksik tarafa H⁺ ekle (asitli ortam!)</p>
                                <div class="bg-yellow-50 dark:bg-yellow-950 p-3 rounded">
                                    <p class="mb-1"><strong>İndirgenme:</strong></p>
                                    <p class="text-sm">Sağda 8 H var (4H₂O'dan), solda 0 H → Sola 8H⁺ ekle</p>
                                    <p class="font-mono text-sm mt-2 font-bold">8H⁺ + MnO₄⁻ → Mn²⁺ + 4H₂O</p>
                                </div>
                            </div>

                            <div class="p-4 rounded-lg border-2" style="background: var(--bg-tertiary); border-color: var(--border-color);">
                                <p class="font-bold text-lg mb-2" style="color: var(--text-primary);">ADIM 5️⃣: Yükleri Dengele (Elektron Ekle)</p>
                                <p class="mb-2"><strong>Yük hesapla ve dengelemek için e⁻ ekle:</strong></p>
                                <div class="space-y-3 mt-3">
                                    <div class="bg-purple-50 dark:bg-purple-950 p-3 rounded">
                                        <p class="mb-1"><strong>İndirgenme yarı tepkimesi:</strong></p>
                                        <p class="text-sm font-mono">8H⁺ + MnO₄⁻ → Mn²⁺ + 4H₂O</p>
                                        <p class="text-sm mt-2">Sol yük: 8(+1) + 1(-1) = +7</p>
                                        <p class="text-sm">Sağ yük: +2</p>
                                        <p class="text-sm mt-2"><strong>Fark: 7-2 = 5</strong> → Sola 5e⁻ ekle</p>
                                        <p class="font-mono text-sm mt-2 font-bold text-green-600">5e⁻ + 8H⁺ + MnO₄⁻ → Mn²⁺ + 4H₂O</p>
                                    </div>
                                    <div class="bg-purple-50 dark:bg-purple-950 p-3 rounded">
                                        <p class="mb-1"><strong>Yükseltgenme yarı tepkimesi:</strong></p>
                                        <p class="text-sm font-mono">Fe²⁺ → Fe³⁺</p>
                                        <p class="text-sm mt-2">Sol yük: +2, Sağ yük: +3</p>
                                        <p class="text-sm mt-2"><strong>Fark: 1</strong> → Sağa 1e⁻ ekle</p>
                                        <p class="font-mono text-sm mt-2 font-bold text-green-600">Fe²⁺ → Fe³⁺ + e⁻</p>
                                    </div>
                                </div>
                            </div>

                            <div class="p-4 rounded-lg border-2" style="background: var(--bg-tertiary); border-color: var(--border-color);">
                                <p class="font-bold text-lg mb-2" style="color: var(--text-primary);">ADIM 6️⃣: Elektron Sayılarını Eşitle</p>
                                <p class="mb-2">Her iki yarı tepkimede de <strong>aynı sayıda elektron</strong> olmalı!</p>
                                <div class="bg-orange-50 dark:bg-orange-950 p-3 rounded">
                                    <p class="text-sm mb-2">İndirgenme: 5e⁻ kullanıyor</p>
                                    <p class="text-sm mb-2">Yükseltgenme: 1e⁻ veriyor</p>
                                    <p class="text-sm mt-3 font-bold">→ Yükseltgenmeyi 5 ile çarp!</p>
                                    <div class="mt-3 space-y-1">
                                        <p class="font-mono text-sm">5e⁻ + 8H⁺ + MnO₄⁻ → Mn²⁺ + 4H₂O  (×1)</p>
                                        <p class="font-mono text-sm font-bold text-red-600">5Fe²⁺ → 5Fe³⁺ + 5e⁻  (×5)</p>
                                    </div>
                                </div>
                            </div>

                            <div class="p-4 rounded-lg border-2 border-green-500 bg-green-50 dark:bg-green-950">
                                <p class="font-bold text-lg mb-2 text-green-800 dark:text-green-400">ADIM 7️⃣: Topla ve Sadeleştir</p>
                                <p class="text-sm mb-3 text-green-900 dark:text-green-300">İki yarı tepkimeyi topla, elektronları iptal et:</p>
                                <div class="bg-white dark:bg-slate-800 p-3 rounded">
                                    <p class="font-mono text-sm line-through opacity-50">5e⁻</p>
                                    <p class="font-mono text-sm">+ 8H⁺ + MnO₄⁻</p>
                                    <p class="font-mono text-sm">+ 5Fe²⁺</p>
                                    <p class="font-mono text-sm">→ Mn²⁺ + 4H₂O</p>
                                    <p class="font-mono text-sm">+ 5Fe³⁺</p>
                                    <p class="font-mono text-sm line-through opacity-50">+ 5e⁻</p>
                                </div>
                                <div class="mt-4 p-4 bg-green-600 text-white rounded-lg">
                                    <p class="font-bold text-xl mb-2">✅ NET DENKLEŞTİRİLMİŞ DENKLEM:</p>
                                    <p class="font-mono text-lg">8H⁺ + MnO₄⁻ + 5Fe²⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-red-50 dark:bg-red-950 p-4 rounded-lg border-l-4 border-red-500 mt-6">
                        <p class="font-bold text-lg mb-2">⚠️ DİKKAT EDİLECEKLER:</p>
                        <ul class="space-y-2">
                            <li><strong>1.</strong> Asitli ortamda sadece H⁺ ve H₂O kullan (OH⁻ KULLANMA!)</li>
                            <li><strong>2.</strong> O eksikse → H₂O ekle, H eksikse → H⁺ ekle</li>
                            <li><strong>3.</strong> Elektronları eşitlerken en küçük ortak katı bul</li>
                            <li><strong>4.</strong> Son kontrolü yap: Atom sayıları ve yükler dengeli mi?</li>
                        </ul>
                    </div>
                    
                    <div class="example-box">
                        <h4 class="font-bold mb-2">Örnek: MnO<sub>4</sub><sup>-</sup> + Fe<sup>2+</sup> (Asit)</h4>
                        <p class="text-sm"><strong>İndirgenme:</strong></p>
                        <p class="font-mono text-sm">5e<sup>-</sup> + 8H<sup>+</sup> + MnO<sub>4</sub><sup>-</sup> → Mn<sup>2+</sup> + 4H<sub>2</sub>O</p>
                        <p class="text-sm mt-2"><strong>Yükseltgenme (×5):</strong></p>
                        <p class="font-mono text-sm">5Fe<sup>2+</sup> → 5Fe<sup>3+</sup> + 5e<sup>-</sup></p>
                        <hr class="my-2">
                        <p class="font-bold text-green-600">Net:</p>
                        <p class="font-mono">8H<sup>+</sup> + MnO<sub>4</sub><sup>-</sup> + 5Fe<sup>2+</sup> → Mn<sup>2+</sup> + 5Fe<sup>3+</sup> + 4H<sub>2</sub>O</p>
                    </div>
                </div>

                <div class="topic-card">
                    <h3 class="text-2xl font-bold mb-4 text-purple-600">🔵 BAZİK ORTAM Denkleştirme</h3>
                    <div class="bg-blue-50 p-4 rounded-lg mb-4">
                        <p class="font-bold mb-2">Yöntem:</p>
                        <ol class="list-decimal list-inside space-y-1">
                            <li>Önce asitli ortamda denkleştir</li>
                            <li>Her H<sup>+</sup> için OH<sup>-</sup> ekle (iki tarafa)</li>
                            <li>H<sup>+</sup> + OH<sup>-</sup> = H<sub>2</sub>O yap</li>
                            <li>Sadeleştir</li>
                        </ol>
                    </div>
                    
                    <div class="key-point">
                        <p class="font-bold">⚠️ Önemli:</p>
                        <p>• Asitli: H<sup>+</sup> kullan</p>
                        <p>• Bazik: OH<sup>-</sup> kullan</p>
                        <p>• Nötr: H<sub>2</sub>O kullan</p>
                    </div>
                </div>
            `
        },
        {
            id: 'topic3',
            title: 'Standart Elektrot Potansiyeli',
            icon: '⚡',
            content: `
                <div class="topic-card">
                    <h3 class="text-2xl font-bold mb-4 text-purple-600">⚡ Standart Elektrot Potansiyeli (E°)</h3>
                    <p class="mb-4">Elektrotun standart hidrojen elektrotuna göre <strong>elektron alma eğilimi</strong>.</p>
                    
                    <div class="key-point mb-4">
                        <h4 class="font-bold">Standart Koşullar:</h4>
                        <ul class="list-disc list-inside">
                            <li>Sıcaklık: 25°C</li>
                            <li>Basınç: 1 atm</li>
                            <li>Derişim: 1 M</li>
                            <li>Referans: H<sub>2</sub> (E° = 0.00 V)</li>
                        </ul>
                    </div>
                    
                    <div class="grid md:grid-cols-2 gap-4 mb-4">
                        <div class="bg-green-50 dark:bg-green-950 p-4 rounded-lg border border-green-200 dark:border-green-800">
                            <h4 class="font-bold text-xl text-green-700 dark:text-green-400">E° > 0 (+)</h4>
                            <ul class="space-y-1 text-sm md:text-base">
                                <li>• Elektron alma eğilimi ↑</li>
                                <li>• İndirgenmesi kolay</li>
                                <li>• Güçlü yükseltgen</li>
                                <li>• <strong>KATOT</strong> olur</li>
                            </ul>
                        </div>
                        
                        <div class="bg-red-50 dark:bg-red-950 p-4 rounded-lg border border-red-200 dark:border-red-800">
                            <h4 class="font-bold text-xl text-red-700 dark:text-red-400">E° < 0 (-)</h4>
                            <ul class="space-y-1 text-sm md:text-base">
                                <li>• Elektron verme eğilimi ↑</li>
                                <li>• Yükseltgenmesi kolay</li>
                                <li>• Güçlü indirgen</li>
                                <li>• <strong>ANOT</strong> olur</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="topic-card">
                    <h3 class="text-2xl font-bold mb-4 text-purple-600">🧮 E°<sub>hücre</sub> HESAPLAMA - DETAYLI ANLATIM</h3>
                    
                    <div class="key-point mb-6">
                        <h4 class="font-bold text-lg mb-3">📐 Formül:</h4>
                        <div class="formula text-2xl text-center my-4 bg-white dark:bg-slate-800 p-4 rounded">
                            E°<sub>hücre</sub> = E°<sub>katot</sub> - E°<sub>anot</sub>
                        </div>
                        <p class="text-center mt-2">veya</p>
                        <div class="formula text-xl text-center my-4 bg-white dark:bg-slate-800 p-4 rounded">
                            E°<sub>hücre</sub> = E°<sub>indirgenme</sub> + E°<sub>yükseltgenme</sub>
                        </div>
                    </div>

                    <div class="example-box mb-6">
                        <h4 class="font-bold text-xl mb-4">📝 ADIM ADIM HESAPLAMA:</h4>
                        
                        <div class="space-y-4">
                            <div class="p-4 rounded-lg border-2" style="background: var(--bg-tertiary); border-color: var(--border-color);">
                                <p class="font-bold text-lg mb-2" style="color: var(--text-primary);">ADIM 1️⃣: Elektrotları Belirle</p>
                                <p class="mb-2">Önce hangi elektrotun katot, hangisinin anot olduğunu bul.</p>
                                <p class="font-mono text-sm bg-gray-50 dark:bg-gray-800 p-2 rounded">Verilen: E°(Ag⁺/Ag) = +0.80 V, E°(Zn²⁺/Zn) = -0.76 V</p>
                                <p class="mt-2"><strong>Karşılaştır:</strong> +0.80 > -0.76</p>
                                <p class="mt-1">→ <strong>KATOT:</strong> Ag (+0.80 V) - büyük olan</p>
                                <p>→ <strong>ANOT:</strong> Zn (-0.76 V) - küçük olan</p>
                            </div>

                            <div class="p-4 rounded-lg border-2" style="background: var(--bg-tertiary); border-color: var(--border-color);">
                                <p class="font-bold text-lg mb-2" style="color: var(--text-primary);">ADIM 2️⃣: Değerleri Yerleştir</p>
                                <p class="mb-3">Formüle doğru elektrot değerlerini yaz:</p>
                                <div class="bg-purple-50 dark:bg-purple-950 p-3 rounded border border-purple-300 dark:border-purple-700">
                                    <p class="font-mono">E°<sub>hücre</sub> = E°<sub>katot</sub> - E°<sub>anot</sub></p>
                                    <p class="font-mono mt-2">E°<sub>hücre</sub> = (+0.80) - (-0.76)</p>
                                </div>
                            </div>

                            <div class="p-4 rounded-lg border-2" style="background: var(--bg-tertiary); border-color: var(--border-color);">
                                <p class="font-bold text-lg mb-2" style="color: var(--text-primary);">ADIM 3️⃣: İşaret Kuralı Dikkat!</p>
                                <p class="mb-2"><strong>Kritik:</strong> Negatif sayıyı çıkarırken işaret değişir!</p>
                                <div class="bg-yellow-50 dark:bg-yellow-950 p-3 rounded border border-yellow-400">
                                    <p class="font-mono text-lg">- (−0.76) = +0.76</p>
                                    <p class="mt-2 text-sm"><strong>Açıklama:</strong> Eksi ile eksi çarpımı artı yapar!</p>
                                </div>
                            </div>

                            <div class="p-4 rounded-lg border-2" style="background: var(--bg-tertiary); border-color: var(--border-color);">
                                <p class="font-bold text-lg mb-2" style="color: var(--text-primary);">ADIM 4️⃣: Hesapla</p>
                                <p class="mb-3">Matematiksel işlemi yap:</p>
                                <div class="bg-gray-50 dark:bg-gray-800 p-3 rounded">
                                    <p class="font-mono">E°<sub>hücre</sub> = 0.80 + 0.76</p>
                                    <p class="font-mono text-xl mt-2 text-green-600 font-bold">E°<sub>hücre</sub> = +1.56 V</p>
                                </div>
                            </div>

                            <div class="p-4 rounded-lg border-2 border-green-500 bg-green-50 dark:bg-green-950">
                                <p class="font-bold text-lg mb-2 text-green-800 dark:text-green-400">ADIM 5️⃣: Sonucu Yorumla</p>
                                <ul class="space-y-2 text-green-900 dark:text-green-300">
                                    <li><strong>✓ E°<sub>hücre</sub> = +1.56 V > 0</strong> → Tepkime <strong>İSTEMLİ</strong></li>
                                    <li><strong>✓ Pozitif değer</strong> → Pil kendiliğinden çalışır</li>
                                    <li><strong>✓ Elektrik üretir</strong> → Galvanik pil olarak kullanılabilir</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="bg-red-50 dark:bg-red-950 p-4 rounded-lg border-l-4 border-red-500 mb-6">
                        <p class="font-bold text-lg mb-2">❌ Sık Yapılan Hatalar:</p>
                        <ul class="space-y-2">
                            <li><strong>1.</strong> Katot ve anotu ters yazmak → E° değerlerini karşılaştırmadan formüle yazmak</li>
                            <li><strong>2.</strong> İşaret hatası → -(−0.76) işlemini −1.52 olarak yapmak</li>
                            <li><strong>3.</strong> Değerleri ters çevirmek → Küçük olanı katot sanmak</li>
                            <li><strong>4.</strong> Birim unutmak → Sonucu <strong>Volt (V)</strong> cinsinden yazmayı unutmak</li>
                        </ul>
                    </div>

                    <div class="topic-card bg-blue-50 dark:bg-blue-950 border-2 border-blue-300 dark:border-blue-700">
                        <h4 class="font-bold text-xl mb-3 text-blue-800 dark:text-blue-300">💡 Alternatif Yöntem:</h4>
                        <p class="mb-3">E°<sub>hücre</sub> = E°<sub>indirgenme</sub> + E°<sub>yükseltgenme</sub> formülünü de kullanabilirsin:</p>
                        <div class="space-y-2">
                            <p><strong>İndirgenme (Katot):</strong> E° = +0.80 V (olduğu gibi)</p>
                            <p><strong>Yükseltgenme (Anot):</strong> E° = -(-0.76) = +0.76 V (işaret ters çevir)</p>
                            <p class="mt-3 font-mono text-lg">E°<sub>hücre</sub> = 0.80 + 0.76 = +1.56 V ✓</p>
                        </div>
                    </div>
                    
                    <div class="example-box">
                        <h4 class="font-bold mb-3">Örnek: Zn-Cu Pili</h4>
                        <p><strong>Verilen:</strong></p>
                        <p>E°(Cu<sup>2+</sup>/Cu) = +0.34 V</p>
                        <p>E°(Zn<sup>2+</sup>/Zn) = -0.76 V</p>
                        <hr class="my-3">
                        <p><strong>E° büyük → KATOT:</strong> Cu (+0.34 V)</p>
                        <p><strong>E° küçük → ANOT:</strong> Zn (-0.76 V)</p>
                        <hr class="my-3">
                        <p class="font-bold text-green-600">E°<sub>hücre</sub> = 0.34 - (-0.76) = 1.10 V</p>
                    </div>
                    
                    <div class="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg mt-4 border border-yellow-200 dark:border-yellow-800">
                        <p class="font-bold dark:text-yellow-400">💡 Kurallar:</p>
                        <p>• E°<sub>hücre</sub> > 0 → İstemli (kendiliğinden)</p>
                        <p>• E°<sub>hücre</sub> < 0 → İstemsiz</p>
                        <p>• E° büyük olan her zaman KATOT!</p>
                    </div>
                </div>

                <div class="topic-card">
                    <h3 class="text-2xl font-bold mb-4 text-purple-600">📊 Standart İndirgenme Potansiyelleri</h3>
                    <div class="p-4 rounded-lg border" style="background: var(--bg-tertiary); border-color: var(--border-color);">
                        <table class="w-full">
                            <thead>
                                <tr class="text-white" style="background: var(--gradient-primary);">
                                    <th class="p-2">Yarı Tepkime</th>
                                    <th class="p-2">E° (V)</th>
                                </tr>
                            </thead>
                            <tbody class="text-sm">
                                <tr class="border-b"><td class="p-2">F<sub>2</sub> + 2e<sup>-</sup> → 2F<sup>-</sup></td><td class="p-2">+2.87</td></tr>
                                <tr class="border-b"><td class="p-2">Cl<sub>2</sub> + 2e<sup>-</sup> → 2Cl<sup>-</sup></td><td class="p-2">+1.36</td></tr>
                                <tr class="border-b"><td class="p-2">Ag<sup>+</sup> + e<sup>-</sup> → Ag</td><td class="p-2">+0.80</td></tr>
                                <tr class="border-b"><td class="p-2">Cu<sup>2+</sup> + 2e<sup>-</sup> → Cu</td><td class="p-2">+0.34</td></tr>
                                <tr class="border-b"><td class="p-2">2H<sup>+</sup> + 2e<sup>-</sup> → H<sub>2</sub></td><td class="p-2">0.00</td></tr>
                                <tr class="border-b"><td class="p-2">Pb<sup>2+</sup> + 2e<sup>-</sup> → Pb</td><td class="p-2">-0.13</td></tr>
                                <tr class="border-b"><td class="p-2">Ni<sup>2+</sup> + 2e<sup>-</sup> → Ni</td><td class="p-2">-0.25</td></tr>
                                <tr class="border-b"><td class="p-2">Fe<sup>2+</sup> + 2e<sup>-</sup> → Fe</td><td class="p-2">-0.44</td></tr>
                                <tr class="border-b"><td class="p-2">Zn<sup>2+</sup> + 2e<sup>-</sup> → Zn</td><td class="p-2">-0.76</td></tr>
                                <tr class="border-b"><td class="p-2">Al<sup>3+</sup> + 3e<sup>-</sup> → Al</td><td class="p-2">-1.66</td></tr>
                                <tr class="border-b"><td class="p-2">Mg<sup>2+</sup> + 2e<sup>-</sup> → Mg</td><td class="p-2">-2.37</td></tr>
                                <tr class="border-b"><td class="p-2">Na<sup>+</sup> + e<sup>-</sup> → Na</td><td class="p-2">-2.71</td></tr>
                                <tr><td class="p-2">Li<sup>+</sup> + e<sup>-</sup> → Li</td><td class="p-2">-3.04</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            `
        },
        {
            id: 'topic4',
            title: 'Aktiflik Serisi',
            icon: '📈',
            content: `
                <div class="topic-card">
                    <h3 class="text-2xl font-bold mb-4 text-purple-600">📈 Aktiflik Serisi</h3>
                    <p class="mb-4">Metallerin <strong>elektron verme (yükseltgenme) eğilimlerine</strong> göre sıralanması.</p>
                    
                    <div class="bg-gradient-to-b from-red-100 via-yellow-100 to-green-100 p-6 rounded-lg mb-4">
                        <h4 class="font-bold text-xl text-center mb-4">⬇️ Aktiflik Azalır (E° Artar)</h4>
                        <div class="space-y-2 text-center text-lg">
                            <div class="bg-red-200 p-3 rounded font-bold">Li > K > Ba > Ca > Na > Mg > Al</div>
                            <div class="bg-orange-200 p-3 rounded font-bold">Zn > Fe > Ni > Sn > Pb</div>
                            <div class="bg-yellow-200 p-3 rounded font-bold">H<sub>2</sub></div>
                            <div class="bg-green-200 p-3 rounded font-bold">Cu > Ag > Hg > Pt > Au</div>
                        </div>
                        <p class="text-center mt-4 font-semibold">↑ Güçlü İndirgen | Güçlü Yükseltgen ↓</p>
                    </div>
                    
                    <div class="key-point mb-4">
                        <h4 class="font-bold text-lg">🎯 Aktiflik Kuralları:</h4>
                        <ul class="list-disc list-inside space-y-2">
                            <li><strong>Aktifliği yüksek:</strong> Kolay yükseltgenir (e<sup>-</sup> verir)</li>
                            <li><strong>E° değeri küçük:</strong> Aktiflik yüksek</li>
                            <li><strong>H<sub>2</sub>'den önce:</strong> Asitle tepkime verir</li>
                            <li><strong>H<sub>2</sub>'den sonra:</strong> Asitle tepkime vermez</li>
                        </ul>
                    </div>
                    
                    <div class="example-box">
                        <h4 class="font-bold mb-3">📝 Örnek Sorular:</h4>
                        <p class="mb-2"><strong>1) Fe ile Cu<sup>2+</sup> tepkime verir mi?</strong></p>
                        <p class="ml-4">Fe, Cu'dan aktif → Fe + Cu<sup>2+</sup> → Fe<sup>2+</sup> + Cu ✓ Verir!</p>
                        
                        <p class="mt-4 mb-2"><strong>2) Cu ile Zn<sup>2+</sup> tepkime verir mi?</strong></p>
                        <p class="ml-4">Cu, Zn'den az aktif → Tepkime vermez! ✗</p>
                        
                        <p class="mt-4 mb-2"><strong>3) Zn ile HCl tepkime verir mi?</strong></p>
                        <p class="ml-4">Zn, H<sub>2</sub>'den önce → Verir! Zn + 2HCl → ZnCl<sub>2</sub> + H<sub>2</sub> ✓</p>
                    </div>
                    
                    <div class="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg mt-4 border-l-4 border-yellow-500 dark:border-yellow-700">
                        <p class="font-bold dark:text-yellow-400">💡 Pratik Kural:</p>
                        <p class="mt-2"><strong>Aktif olan, az aktif olanın iyonunu indirgeyebilir!</strong></p>
                        <p class="mt-2">Zn + Cu<sup>2+</sup> → Zn<sup>2+</sup> + Cu ✓</p>
                        <p>Cu + Zn<sup>2+</sup> → Tepkime Yok! ✗</p>
                    </div>
                </div>

                <div class="topic-card">
                    <h3 class="text-2xl font-bold mb-4 text-purple-600">🔬 Tepkime İstemliğini Belirleme</h3>
                    <div class="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg mb-4 border border-blue-200 dark:border-blue-800">
                        <h4 class="font-bold mb-2 dark:text-blue-400">Yöntem 1: Aktiflik Serisi</h4>
                        <p>Daha aktif metal, az aktif metalin iyonunu indirgeyebilir.</p>
                    </div>
                    
                    <div class="bg-green-50 dark:bg-green-950 p-4 rounded-lg mb-4 border border-green-200 dark:border-green-800">
                        <h4 class="font-bold mb-2 dark:text-green-400">Yöntem 2: E° Değerleri</h4>
                        <p>E°<sub>hücre</sub> = E°<sub>katot</sub> - E°<sub>anot</sub></p>
                        <p class="mt-2">• E°<sub>hücre</sub> > 0 → İstemli ✓</p>
                        <p>• E°<sub>hücre</sub> < 0 → İstemsiz ✗</p>
                    </div>
                    
                    <div class="example-box">
                        <h4 class="font-bold mb-3">Örnek: Fe + Ni<sup>2+</sup> tepkimesi</h4>
                        <p><strong>Aktiflik:</strong> Fe > Ni → Fe daha aktif → Tepkime verir ✓</p>
                        <hr class="my-2">
                        <p><strong>E° ile:</strong></p>
                        <p>E°(Ni<sup>2+</sup>/Ni) = -0.25 V (katot)</p>
                        <p>E°(Fe<sup>2+</sup>/Fe) = -0.44 V (anot)</p>
                        <p>E°<sub>hücre</sub> = -0.25 - (-0.44) = +0.19 V > 0 ✓</p>
                    </div>
                </div>
            `
        }
    ]
};

// Sınav Soruları
const quizQuestions = [
    {
        question: "Zn-Cu galvanik pilinde, Zn elektrotunda ne olur?",
        options: [
            "Zn, Zn²⁺ iyonlarına yükseltgenir ve elektrot aşınır",
            "Zn²⁺ iyonları Zn'ye indirgenir ve elektrot büyür",
            "Hiçbir değişiklik olmaz",
            "Cu²⁺ iyonları Zn üzerine kaplar"
        ],
        correct: 0,
        explanation: "Zn elektrotu ANOT'tur. Anotta oksidasyonu (yükseltgenme) olur: Zn → Zn²⁺ + 2e⁻. Metal çözünerek elektrot aşınır."
    },
    {
        question: "Galvanik pillerde negatif elektrot hangisidir ve hangi olay gerçekleşir?",
        options: [
            "Katot, indirgenme",
            "Anot, yükseltgenme",
            "Katot, yükseltgenme",
            "Anot, indirgenme"
        ],
        correct: 1,
        explanation: "ANOT negatif (−) elektrottur ve oksidasyonu (yükseltgenme) gerçekleşir. Elektron verir."
    },
    {
        question: "Aşağıdaki pil notasyonu için katot hangisidir?\nAg(k) | Ag⁺(suda) || Cu²⁺(suda) | Cu(k)",
        options: [
            "Ag elektrotu",
            "Cu elektrotu",
            "Tuz köprüsü",
            "Her ikisi de"
        ],
        correct: 1,
        explanation: "Pil notasyonunda sağda yazılan elektrot KATOT'tur. Bu örnekte Cu elektrotu katottur."
    },
    {
        question: "Al³⁺ + 3e⁻ → Al yarı tepkimesi için Al ile Mg²⁺ arasındaki tepkimenin net denklemi nedir?\n(Mg²⁺ + 2e⁻ → Mg)",
        options: [
            "2Al + 3Mg²⁺ → 2Al³⁺ + 3Mg",
            "Al + Mg²⁺ → Al³⁺ + Mg",
            "3Al + 2Mg²⁺ → 3Al³⁺ + 2Mg",
            "Tepkime gerçekleşmez"
        ],
        correct: 0,
        explanation: "Elektronları eşitlemeliyiz: Al yarı tepkimesi ×2 (6e⁻), Mg yarı tepkimesi ×3 (6e⁻). Net: 2Al + 3Mg²⁺ → 2Al³⁺ + 3Mg"
    },
    {
        question: "MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O ve Cl⁻ → ½Cl₂ + e⁻ yarı tepkimelerinin net denklemi nedir?",
        options: [
            "MnO₄⁻ + 8H⁺ + 5Cl⁻ → Mn²⁺ + 4H₂O + 5/2Cl₂",
            "2MnO₄⁻ + 16H⁺ + 10Cl⁻ → 2Mn²⁺ + 8H₂O + 5Cl₂",
            "MnO₄⁻ + 8H⁺ + Cl⁻ → Mn²⁺ + 4H₂O + ½Cl₂",
            "MnO₄⁻ + Cl⁻ → Mn²⁺ + Cl₂"
        ],
        correct: 0,
        explanation: "Cl yarı tepkimesini 5 ile çarparız (5e⁻ eşitlemek için): 5Cl⁻ → 5/2Cl₂ + 5e⁻. Topladığımızda: MnO₄⁻ + 8H⁺ + 5Cl⁻ → Mn²⁺ + 4H₂O + 5/2Cl₂"
    },
    {
        question: "Fe²⁺ + MnO₄⁻ → Fe³⁺ + Mn²⁺ tepkimesinin asitli ortamda dengeli hali hangisidir?",
        options: [
            "5Fe²⁺ + MnO₄⁻ + 8H⁺ → 5Fe³⁺ + Mn²⁺ + 4H₂O",
            "Fe²⁺ + MnO₄⁻ + H⁺ → Fe³⁺ + Mn²⁺ + H₂O",
            "5Fe²⁺ + MnO₄⁻ → 5Fe³⁺ + Mn²⁺",
            "Fe²⁺ + MnO₄⁻ + 8H⁺ → Fe³⁺ + Mn²⁺ + 4H₂O"
        ],
        correct: 0,
        explanation: "MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O ve Fe²⁺ → Fe³⁺ + e⁻ (×5). Net: 5Fe²⁺ + MnO₄⁻ + 8H⁺ → 5Fe³⁺ + Mn²⁺ + 4H₂O"
    },
    {
        question: "Bazik ortamda Cr₂O₇²⁻ + S²⁻ → Cr³⁺ + S tepkimesini denkleştirirken ne yapmalıyız?",
        options: [
            "Önce asitli ortamda denkleştir, sonra OH⁻ ekle",
            "Doğrudan OH⁻ ekle",
            "Sadece H₂O ekle",
            "Hiçbir şey ekleme"
        ],
        correct: 0,
        explanation: "Bazik ortam için: (1) Asitli ortamda denkleştir, (2) Her H⁺ için OH⁻ ekle (iki tarafa), (3) H⁺ + OH⁻ = H₂O yap, (4) Sadeleştir."
    },
    {
        question: "E°(Ag⁺/Ag) = +0.80 V ve E°(Zn²⁺/Zn) = -0.76 V. Ag-Zn pili için E°hücre kaç volttur?",
        options: [
            "+1.56 V",
            "+0.04 V",
            "-1.56 V",
            "+0.80 V"
        ],
        correct: 0,
        explanation: "E° büyük olan (Ag, +0.80) KATOT, küçük olan (Zn, -0.76) ANOT. E°hücre = 0.80 - (-0.76) = +1.56 V"
    },
    {
        question: "E°(Cu²⁺/Cu) = +0.34 V ve E°(Fe²⁺/Fe) = -0.44 V ise, Fe + Cu²⁺ tepkimesi için E°hücre nedir?",
        options: [
            "+0.78 V",
            "-0.78 V",
            "+0.10 V",
            "-0.10 V"
        ],
        correct: 0,
        explanation: "Cu daha büyük E° → KATOT (+0.34 V), Fe → ANOT (-0.44 V). E°hücre = 0.34 - (-0.44) = +0.78 V > 0, istemli!"
    },
    {
        question: "Bir galvanik pil için E°hücre = -0.25 V bulundu. Bu tepkime hakkında ne söylenebilir?",
        options: [
            "Tepkime kendiliğinden olur",
            "Tepkime kendiliğinden olmaz (istemsiz)",
            "Tepkime dengededir",
            "Bilgi yetersiz"
        ],
        correct: 1,
        explanation: "E°hücre < 0 ise tepkime İSTEMSİZ'dir (kendiliğinden olmaz). Ters yönde kendiliğinden olur."
    },
    {
        question: "Hangisi en güçlü indirgen (redükleyici) ajandır?",
        options: [
            "Li (E° = -3.04 V)",
            "F₂ (E° = +2.87 V)",
            "H₂ (E° = 0.00 V)",
            "Cu (E° = +0.34 V)"
        ],
        correct: 0,
        explanation: "En küçük E° değerine sahip olan en güçlü indirgendir (elektron verme eğilimi en yüksek). Li en küçük E° → en güçlü indirgen."
    },
    {
        question: "Aktiflik serisine göre aşağıdakilerden hangisi DOĞRUDUR?",
        options: [
            "Zn, Cu'dan daha aktiftir",
            "Cu, Fe'den daha aktiftir",
            "Ag, Zn'den daha aktiftir",
            "Pt, Al'den daha aktiftir"
        ],
        correct: 0,
        explanation: "Aktiflik: Zn > Fe > Cu > Ag > Pt. Zn, Cu'dan daha aktif olduğu için doğru cevap A'dır."
    },
    {
        question: "Fe ile Ni²⁺ arasında tepkime olur mu? (Fe, Ni'den daha aktif)",
        options: [
            "Evet, Fe + Ni²⁺ → Fe²⁺ + Ni",
            "Hayır, tepkime olmaz",
            "Fe²⁺ + Ni → Fe + Ni²⁺ olur",
            "Sadece bazik ortamda olur"
        ],
        correct: 0,
        explanation: "Daha aktif metal (Fe), az aktif metalin iyonunu (Ni²⁺) indirgeyebilir. Fe + Ni²⁺ → Fe²⁺ + Ni tepkimesi olur."
    },
    {
        question: "Aşağıdaki metallerden hangisi HCl ile tepkime VERİR?",
        options: [
            "Au (altın)",
            "Ag (gümüş)",
            "Zn (çinko)",
            "Pt (platin)"
        ],
        correct: 2,
        explanation: "H₂'den önce gelen metaller asitlerle tepkime verir. Zn > H₂, bu yüzden Zn + 2HCl → ZnCl₂ + H₂ tepkimesi olur."
    },
    {
        question: "Cu metal ile Zn²⁺ iyonları arasında tepkime olur mu?",
        options: [
            "Evet, Cu daha aktif",
            "Hayır, Cu daha az aktif",
            "Evet, ama sadece sıcakta",
            "Evet, ama sadece asitli ortamda"
        ],
        correct: 1,
        explanation: "Zn > Cu (Zn daha aktif). Cu, Zn'den az aktif olduğu için Zn²⁺ iyonlarını indirgeyemez. Tepkime OLMAZ."
    },
    {
        question: "E°(Pb²⁺/Pb) = -0.13 V ve E°(Sn²⁺/Sn) = -0.14 V. Pb-Sn pili için hangisi doğrudur?",
        options: [
            "Pb katot, Sn anot",
            "Sn katot, Pb anot",
            "Her ikisi de anot",
            "Pil oluşmaz"
        ],
        correct: 0,
        explanation: "E° büyük olan (-0.13 > -0.14) KATOT olur. Pb'nin E° değeri büyük → Pb katot, Sn anot."
    },
    {
        question: "MnO₂ + 4H⁺ + 2e⁻ → Mn²⁺ + 2H₂O (E° = +1.23 V) ve Zn²⁺ + 2e⁻ → Zn (E° = -0.76 V) için E°hücre nedir?",
        options: [
            "+1.99 V",
            "+0.47 V",
            "-1.99 V",
            "+1.23 V"
        ],
        correct: 0,
        explanation: "MnO₂ (E° = +1.23) → KATOT, Zn (E° = -0.76) → ANOT. E°hücre = 1.23 - (-0.76) = +1.99 V"
    },
    {
        question: "Bir pil notasyonu: Ni(k) | Ni²⁺(suda) || Ag⁺(suda) | Ag(k). Bu pilde anot hangisidir?",
        options: [
            "Ni elektrotu",
            "Ag elektrotu",
            "Her ikisi de",
            "Tuz köprüsü"
        ],
        correct: 0,
        explanation: "Pil notasyonunda solda yazılan elektrot ANOT'tur. Ni elektrotu anot, oksidasyonu burada olur."
    },
    {
        question: "Al + Fe²⁺ → Al³⁺ + Fe tepkimesi için E°(Fe²⁺/Fe) = -0.44 V ve E°(Al³⁺/Al) = -1.66 V ise E°hücre kaçtır?",
        options: [
            "+1.22 V",
            "-1.22 V",
            "+2.10 V",
            "-2.10 V"
        ],
        correct: 0,
        explanation: "Fe (E° = -0.44) → KATOT, Al (E° = -1.66) → ANOT. E°hücre = -0.44 - (-1.66) = +1.22 V. İstemli!"
    },
    {
        question: "Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O ve Br⁻ → ½Br₂ + e⁻ için net tepkime hangisidir?",
        options: [
            "Cr₂O₇²⁻ + 14H⁺ + 6Br⁻ → 2Cr³⁺ + 7H₂O + 3Br₂",
            "Cr₂O₇²⁻ + 14H⁺ + 3Br⁻ → 2Cr³⁺ + 7H₂O + 3/2Br₂",
            "Cr₂O₇²⁻ + Br⁻ → 2Cr³⁺ + Br₂",
            "2Cr₂O₇²⁻ + 28H⁺ + 12Br⁻ → 4Cr³⁺ + 14H₂O + 6Br₂"
        ],
        correct: 0,
        explanation: "Br⁻ yarı tepkimesini 6 ile çarparız: 6Br⁻ → 3Br₂ + 6e⁻. Net: Cr₂O₇²⁻ + 14H⁺ + 6Br⁻ → 2Cr³⁺ + 7H₂O + 3Br₂"
    }
];

// Soru dağılımı - Sınavda toplam 4 soru var!
const questionDistribution = [
    { topic: "Anot (-) ve Katot (+) Karıştırma", count: 1 },
    { topic: "Redoks Denkleştirmede Ortam Önemli", count: 1 },
    { topic: "E° Değerleri ve İşaretleri Dikkatice", count: 1 },
    { topic: "Aktiflik Serisini İyi Bil", count: 1 }
];
