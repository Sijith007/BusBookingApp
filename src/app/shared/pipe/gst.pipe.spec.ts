import { GstPipe } from './gst.pipe';

describe('GstPipe', () => {
  it('create an instance', () => {
    const pipe = new GstPipe();
    expect(pipe).toBeTruthy();
  });
});
