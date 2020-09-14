function sequencer(){
	const kicks= new Tone.Player("./drums/kick-electro01.wav").toMaster();
	const snare= new Tone.Player("./drums/snare-lofi02.wav").toMaster();
	let index=0;

	Tone.Transport.scheduleRepeat(repeat,"8n");
	Tone.Transport.start();

	function repeat(){
		let step= index%8;
		const kickInput= document.querySelector(`.kicks input:nth-child(${step+1})`);
		const snareInput= document.querySelector(`.snare input:nth-child(${step+1})`);

		if(kickInput.checked){
			kicks.start();
		}
		if(snareInput.checked){
			snare.start();
		}

		index++;
	}
}

sequencer();