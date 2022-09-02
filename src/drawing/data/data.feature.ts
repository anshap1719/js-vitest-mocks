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

export class Feature implements google.maps.Data.Feature {
  constructor(options?: google.maps.Data.FeatureOptions | null) {}
  public forEachProperty = vi
    .fn()
    .mockImplementation((callback: (a: any, b: string) => void) => {
      return null;
    });
  public getGeometry = vi
    .fn()
    .mockImplementation((): google.maps.Data.Geometry | null => {
      return null;
    });
  public getId = vi.fn().mockImplementation((): number | string | undefined => {
    return "1";
  });
  public getProperty = vi.fn().mockImplementation((name: string): any => {
    return undefined;
  });
  public removeProperty = vi.fn().mockImplementation((name: string): void => {
    return null;
  });
  public setGeometry = vi
    .fn()
    .mockImplementation(
      (
        newGeometry:
          | google.maps.Data.Geometry
          | null
          | google.maps.LatLng
          | google.maps.LatLngLiteral
      ): void => {
        return null;
      }
    );
  public setProperty = vi
    .fn()
    .mockImplementation((name: string, newValue: any): void => {
      return null;
    });
  public toGeoJson = vi
    .fn()
    .mockImplementation((callback: (a: object) => void): void => {
      return null;
    });
}
