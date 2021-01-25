import { NgModule } from '@angular/core';

import { SignalProtocolStore } from './signal-protocol-store/signal-protocol-store';
import { InMemoryStorage } from './signal-protocol-store/storages/in-memory';
@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [InMemoryStorage, SignalProtocolStore],
})
export class SignalModule {}
