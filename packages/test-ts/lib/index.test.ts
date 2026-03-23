import tape from 'tape';
import hello from '.';

tape('问候一下', t => {
	t.equal(hello(), 'hello, world!');

	t.end();
});

