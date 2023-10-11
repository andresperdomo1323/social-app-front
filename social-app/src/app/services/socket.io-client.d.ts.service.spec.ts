import { TestBed } from '@angular/core/testing';

import { SocketIoClientDTsService } from '../socket.io-client.service';

describe('SocketIoClientDTsService', () => {
  let service: SocketIoClientDTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocketIoClientDTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
