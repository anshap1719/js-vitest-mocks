/**
 * Copyright 2022 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { LatLngBounds } from "../../maps/coordinates/latlng";
import { MapsEventListener } from "../../maps/event/event";
import { MVCObject } from "../../maps/event/mvcobject";

export class KmlLayer extends MVCObject implements google.maps.KmlLayer {
  public getDefaultViewport = vi
    .fn()
    .mockImplementation((): LatLngBounds | null => null);
  public getMap = vi
    .fn()
    .mockImplementation(
      (): google.maps.Map | google.maps.StreetViewPanorama | null | undefined =>
        null
    );
  public getMetadata = vi
    .fn()
    .mockImplementation((): google.maps.KmlLayerMetadata | null => null);
  public getStatus = vi
    .fn()
    .mockImplementation((): google.maps.KmlLayerStatus | null => null);
  public getUrl = vi
    .fn()
    .mockImplementation((): string | null | undefined => null);
  public getZIndex = vi
    .fn()
    .mockImplementation((): number | null | undefined => null);
  public setMap = vi
    .fn()
    .mockImplementation((map: google.maps.Map | null): void => {
      return;
    });
  public setOptions = vi
    .fn()
    .mockImplementation((options: google.maps.KmlLayerOptions): void => {
      return;
    });
  public setUrl = vi.fn().mockImplementation((url: string): void => {
    return;
  });
  public setZIndex = vi.fn().mockImplementation((zIndex: number): void => {
    return;
  });
  public addListener = vi
    .fn()
    .mockImplementation(
      (
        eventName: string,
        handler: (this: KmlLayer, event: MouseEvent) => void
      ): google.maps.MapsEventListener => MapsEventListener
    );
  constructor(opts?: google.maps.KmlLayerOptions | null) {
    super();
  }
}
